import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../data.service";


import { spiritedAway } from "../animation/spiritedAway.animation";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [spiritedAway]
})
export class AboutComponent implements OnInit {

  goals: any; //defining goals here

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.route.params.subscribe(res =>
      console.log("this is activated route: ", res.id)
    );
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res)
  }

  sendMeHome() {
    this.router.navigate(["/"]); //this is route to home defined in app-routing
  }
}
