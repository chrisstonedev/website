import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { LogService } from '../log.service';

@Injectable()
export class ContactService {
  private characters = [
    { name: 'Luke Skywalker', link: '' },
    { name: 'Darth Vader', link: '' }
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  getCharacters() {
    return this.characters.slice();
  }

  onSideChosen(charInfo) {
    window.open(charInfo.link, '_blank');
  }

  addCharacter(name, link) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, link: link};
    this.characters.push(newChar);
  }
}
