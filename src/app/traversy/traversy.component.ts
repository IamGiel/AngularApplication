import { Component, OnInit } from '@angular/core';


@Component({
  selector: "app-traversy",
  templateUrl: "./traversy.component.html",
  styleUrls: ["./traversy.component.scss"]
})
export class TraversyComponent implements OnInit {
  interpolation: string;
  age: any = new Date().getFullYear();
  email: any = "Lfagel84@gmail.com";
  address: Address; //use interface for nested properties
  hobbies: any[];
  sayHello: string;
  visitors: number = 0;
  addtoHobbyList:string;

  constructor() {
    console.log("constructor is initialized");
  }

  ngOnInit() {
    console.log("ngOnInit is initialized, changed the name of John Doe to Gel");
    console.log("typescript strictly tells us of its `type`");
    this.interpolation = "Gel";
    console.log("use javascript logic for getting age");
    this.age = this.age - 1984;
    this.email = "testing@mail.com";
    this.address = {
      street: "124 Darley Dale Loop",
      city: "Apex",
      state: "NC"
    };
    this.hobbies = [
      "Play tennis",
      "basketball",
      "develop web programming/coding skills",
      "learning new technology",
      "work out",
      "enjoy outdoors",
      "travel on a regular basis"
    ];
  }

  //outside the ngOnInit Life-cycle hook
  //define out button handler called flashMessage()
  flashMessage() {
    console.log("button listens, so it works");
    this.sayHello = "Hello, Gel!";
    this.visitors++;
  }
  addHobby(addtoHobbyList) {
    this.hobbies.unshift(addtoHobbyList);
    this.addtoHobbyList = "";
  }
  deleteHobby(addtoHobbyList) {
    for (let i = 0; i < addtoHobbyList.length; i++) {
      if (this.hobbies[i] == addtoHobbyList) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {//you can set this on another file, and import it to multiple files if needed
    street: string;
    city: string;
    state: string;
  };