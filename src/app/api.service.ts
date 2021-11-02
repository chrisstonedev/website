import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getConferences(): Observable<Conference[]> {
    return this.http.get<Conference[]>('/.netlify/functions/getConferences', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getCounter(): Observable<Counter> {
    return this.http.get<Counter>('/.netlify/functions/getCounter', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  incrementCounter(): Observable<boolean> {
    return this.http.get<boolean>('/.netlify/functions/incrementCounter', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export interface Conference {
  name: string;
  date: string;
  type: string;
}

export interface Counter {
  count: number;
}
