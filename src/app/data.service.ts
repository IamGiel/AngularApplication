import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(["Im working on my site"]);
  goalie = this.goals.asObservable();

  constructor() {}
  changeGoal(goalie){
    this.goals.next(goalie);
  }
}
