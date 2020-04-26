import { Injectable } from '@angular/core';
@Injectable()
export class LogService {

  constructor() { }

  writeLog(logText) {
    console.log(logText);
  }

}
