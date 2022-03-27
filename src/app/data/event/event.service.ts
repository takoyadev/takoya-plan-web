import { Injectable } from '@angular/core';
import {Event} from "./event";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events : Event[] = [
    {
      label: "My first event ever",
      author: "Chinjto",
      options: [
        {date: new Date("2022-03-26T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-27T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-28T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-29T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-30T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-31T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-04-01T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-04-02T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-04-03T00:00:00.000Z"), selected: false, optional: false},
      ]
    },
    {
      label: "My second event ever",
      author: "Chinjto",
      options: [
        {date: new Date("2022-03-26T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-27T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-28T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-29T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-30T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-03-31T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-04-01T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-04-02T00:00:00.000Z"), selected: false, optional: false},
        {date: new Date("2022-04-03T00:00:00.000Z"), selected: false, optional: false},
      ]
    }
  ]

  constructor() { }

  getEvent(id: number): Observable<Event> {
    return of(this.events[id]);
  }

}
