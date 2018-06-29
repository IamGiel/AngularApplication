import { Component, OnInit } from '@angular/core';

@Component({
  // selector: "app-server",
  selector: ".app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent {
  //properties here:
  imHere: Boolean = true;
  userId: Number = 1000100210;
  userStatus: String = "offline";
  btnDisabled: Boolean = false; // disable button using property binding
  hideForm: boolean = false;


  constructor() {
    setTimeout(() => {
      this.btnDisabled = true;
    }, 3000);
  }

  //methods
  getStatus() {
    return this.userStatus;
  }

  onAdminForm() {
    this.hideForm = true;
  }

  //input
  onInputName(event: any) {
    // reference to DOM's $event = which gives access to events data
    console.log(event);
  }
  onMouseOut() {
    console.log("hello im out")
    this.hideForm = false;
  }
}