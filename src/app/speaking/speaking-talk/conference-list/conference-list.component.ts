import { Component, Input, OnInit } from '@angular/core';
import { Conference } from '../../talk';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
})
export class ConferenceListComponent implements OnInit {
  @Input() conferences: Conference[] = [];
  @Input() type!: ListType;
  listType = ListType;

  ngOnInit() {
    const today = new Date().toISOString().slice(0, 10);
    this.conferences = this.conferences.filter(x => x.date.localeCompare(today) === this.type);
  }
}

export enum ListType {
  Past = -1,
  Present = 0,
  Future = 1
}
