import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { heroService } from "./heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"],
  providers: [heroService]
})
export class HeroesComponent implements OnInit {
  //here is where we set-up our bindings
  player1 = "SpongeBob"; //one-way binding using {{player1}}
  player2 = "SquidWord";
  player3 = "Patrick";
  imageHappy1 = "../assets/images/spngeBob.jpeg";
  imageHappy2 = "../assets/images/squidWord.jpeg";
  imageHappy3 = "../assets/images/patrick.png";

  imageAngry1 = "../assets/images/angrySpongeBob.jpeg";
  imageAngry2 = "../assets/images/angrySquid.jpeg";
  imageAngry3 = "../assets/images/angryPat.jpeg";
  showHide = "hidden";

  public getSkills = [];
  public getTraits = []; //trying services
  public getThings = [];

  characterInfo1 = "";
  characterInfo2 = "";
  characterInfo3 = "";
  showBtn = false;
  showBtnAnger = true;

  showBtn2 = false;
  showBtnAnger2 = true;

  showBtn3 = false;
  showBtnAnger3 = true;

  btnDisabled = false; //property binding using [this]=value

  constructor(
    //here we add our service injections
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService,
    private _heroService: heroService
  ) {
    this.route.params.subscribe(res =>
      console.log("this is activated route: ", res.id)
    );
    // this.skills = this.gelsAjax.skills;
  }

  ngOnInit() {
    this.getTraits = this._heroService.getTraits();
    this.getSkills = this._heroService.getSkills();
    this.getThings = this._heroService.getThings();
  }

  normalize() {
    //logic here
    this.imageHappy1 = this.imageAngry1;
    this.showBtn = true;
    this.showBtnAnger = false;
  }
  happify() {
    //logic here
    this.imageHappy1 = "../assets/images/spngeBob.jpeg";
    this.showBtn = false;
    this.showBtnAnger = true;
  }
  //for second card
  normalize2() {
    //logic here
    this.imageHappy2 = this.imageAngry2;
    this.showBtn2 = true;
    this.showBtnAnger2 = false;
  }
  happify2() {
    //logic here
    this.imageHappy2 = "../assets/images/squidWord.jpeg";
    this.showBtn2 = false;
    this.showBtnAnger2 = true;
  }
  //third card
  normalize3() {
    //logic here
    this.imageHappy3 = this.imageAngry3;
    this.showBtn3 = true;
    this.showBtnAnger3 = false;
  }
  happify3() {
    //logic here
    this.imageHappy3 = "../assets/images/patrick.jpeg";
    this.showBtn3 = false;
    this.showBtnAnger3 = true;
  }

  //add info logic here
  addInfo1() {
    this.getSkills.push(this.characterInfo1);
    this.characterInfo1 = "";
  }
  addInfo2() {
    this.getTraits.push(this.characterInfo2); //using services
    this.characterInfo2 = "";
  }
  addInfo3() {
    this.getThings.push(this.characterInfo3);
    this.characterInfo3 = "";
  }

  player2Info() {
    //logic here
    this.imageHappy2 = this.imageAngry2;
  }
  player3Info() {
    //logic here
    this.imageHappy3 = this.imageAngry3;
  }
}
