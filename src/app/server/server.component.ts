import { Component, OnInit } from "@angular/core";
import { EmailValidator } from "@angular/forms";

@Component({
  // selector: "app-server",
  selector: ".app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent {
  //properties here:
  btnDisabled: Boolean = false; // disable button using property binding
  userEmail: string = "enter@email.com";
  adminForm: boolean = true;

  constructor() {
    setTimeout(() => {
      this.btnDisabled = true;
    }, 3000);
  }

  //methods

  //hide admin form
  hideForm(){
    this.adminForm = !this.adminForm;
  }

}
