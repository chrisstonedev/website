import {Injectable} from '@angular/core';
import {Talk} from "./talk";
import talkData from '../../assets/talks-data.json';

@Injectable({
  providedIn: 'root',
})
export class SpeakingService {
  private talks: Talk[] = talkData;

  constructor() { }

  getTalks() {
    return this.talks;
  }
}
