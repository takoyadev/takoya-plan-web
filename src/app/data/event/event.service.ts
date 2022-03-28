import { Injectable } from '@angular/core';
import {Event} from "./event";
import {Observable, of} from "rxjs";
import {Option} from "../option/option";
import {Profil} from "../profil/profil";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  chinto: Profil = {firstName: "Cyril", lastName: "DEFAYE", email: "contact@cyril-defaye.fr"};

  option1: Option = {date: new Date("2022-03-26T00:00:00.000Z"), selected: false, optional: false};
  option2: Option = {date: new Date("2022-03-27T00:00:00.000Z"), selected: false, optional: false};
  option3: Option = {date: new Date("2022-03-28T00:00:00.000Z"), selected: false, optional: false};
  option4: Option = {date: new Date("2022-03-29T00:00:00.000Z"), selected: false, optional: false};
  option5: Option = {date: new Date("2022-03-30T00:00:00.000Z"), selected: false, optional: false};
  option6: Option = {date: new Date("2022-03-31T00:00:00.000Z"), selected: false, optional: false};
  option7: Option = {date: new Date("2022-04-01T00:00:00.000Z"), selected: false, optional: false};
  option8: Option = {date: new Date("2022-04-02T00:00:00.000Z"), selected: false, optional: false};
  option9: Option = {date: new Date("2022-04-03T00:00:00.000Z"), selected: false, optional: false};

  events: Event[] = [
    {
      label: "My first event ever",
      description: "This is my first event. Come on, dudes!",
      author: this.chinto,
      options: [
        this.option1,
        this.option2,
        this.option3,
        this.option4,
        this.option5,
        this.option6,
        this.option7,
        this.option8,
        this.option9,
      ]
    },
    {
      label: "My second event ever",
      description: "This is my second event. Nothing new, here...",
      author: this.chinto,
      options: [
        this.option1,
        this.option2,
        this.option8,
        this.option9,
      ]
    }
  ]

  constructor() { }

  getEvent(id: number): Observable<Event> {
    return of(this.events[id]);
  }

}
