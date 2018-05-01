import { Component, OnInit } from "@angular/core";
import { homeAnimation } from "../animation/home.animation";
import { DeleteAnimation } from "../animation/delete.animation";

import { DataService } from "../data.service";

import {
  //import animations specific functions from animations
  trigger,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  //component decorator
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  //animations go here
  animations: [homeAnimation, DeleteAnimation]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btn: string = "Add to the list here...";
  gelsMemo: string = "suggest here..."
  goalTxt: string = "I welcome thoughts.."; //double binding sample
  //defining an array to use  in event listener example
  goals = ["Work on adding chat capability"];

  constructor(private _data: DataService) {}
  // similar to REACT: this line is a LIFE CYCLE HOOK that renders onload (in REACT: componentDidMount())
  ngOnInit() {
    this._data.goalie.subscribe(res => (this.goals = res));
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  //onClick - this function will be invoked
  addItem() {
    if (!this.goalTxt) {
      return false;
    } else if (this.goalTxt) {
      this.goals.push(this.goalTxt); // add goalTxt to goals array
      this.goalTxt = ""; //clear the input after submit, by ""
      this.itemCount = this.goals.length; //update the count, by counting the length of items in array
      this._data.changeGoal(this.goals);
    }
  }
  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }
}

//difference between node and angular = https://www.angularminds.com/blog/article/comparison-between-angularJS-vs-node-js.html
//how to start an angular application = https://angular.io/guide/quickstart
//what are primitive types and none primitive types
//what is immutable and non immutable
//whats the difference between mongo and mysql
//whats the difference between root scope and scope
//whats the difference between html4 and html5
//why is jquery not used in Angular or React?
//
