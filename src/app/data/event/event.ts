import {Option} from "../option/option";
import {Profil} from "../profil/profil";

export class Event {

  label?: String;
  author?: Profil;
  options: Option[] = [];
  description?: String;

}
