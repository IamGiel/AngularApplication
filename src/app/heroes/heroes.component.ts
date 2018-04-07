import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.route.params.subscribe(res =>
      console.log("this is activated route: ", res.id)
    );
  }
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

  skill = "swordsman";
  characterInfo1 = null;

  btnDisabled = false; //property binding using [this]=value

  addInfo1(){
    this.skill = this.characterInfo1;
  }

  player1Info() {
    //logic here
    this.imageHappy1 = this.imageAngry1;
  }
  player2Info() {
    //logic here
    this.imageHappy2 = this.imageAngry2;
  }
  player3Info() {
    //logic here
    this.imageHappy3 = this.imageAngry3;
  }

  ngOnInit() {}
}
