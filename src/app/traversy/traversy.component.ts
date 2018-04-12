import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-traversy",
  templateUrl: "./traversy.component.html",
  styleUrls: ["./traversy.component.scss"]
})
export class TraversyComponent implements OnInit {
  interpolation: string = "John Doe";
  age: any = new Date().getFullYear();
  address: Address; //use interface for nested properties
  hobbies:any[];
  constructor() {
    console.log("constructor is initialized");
  }

  ngOnInit() {
    console.log("ngOnInit is initialized, changed the name of John Doe to Gel");
    console.log("typescript strictly tells us of its `type`");
    this.interpolation = "Gel";
    console.log("use javascript logic for getting age")
    this.age = this.age - 1984;
    this.address = {
      street: "124 Darley Dale Loop",
      city: "Apex",
      state: "NC"
    };
    this.hobbies = ["Play tennis", "basketball", "develop web programming/coding skills", "learning new technology", "work out", "enjoy outdoors", "travel on a regular basis"];

  }
}

interface Address {//you can set this on another file, and import it to multiple files if needed
    street: string;
    city: string;
    state: string;
  };