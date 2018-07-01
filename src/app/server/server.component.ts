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
  userEmail: string;
  userPassword: any;
  adminForm: boolean = true;
  //testing purpose
  password: any = "Test1";
  adminEmail: any = "LifeZoneAdmin1";

  constructor() {
    setTimeout(() => {
      this.btnDisabled = true;
    }, 1000);
  }

  //methods

  //hide admin form
  hideForm() {
    this.adminForm = !this.adminForm;
  }

  //capture user input
  userValue(event) {
    this.userEmail = event.target.value;
    console.log(this.userEmail);
  }
  passwordValue(event) {
    this.userPassword = event.target.value;
    console.log(this.userPassword);
  }

  //
  validate() {
    console.log(this.userPassword, " === ", this.password);
    console.log(this.userEmail, " === ", this.adminEmail);
    if (
      this.userEmail === this.adminEmail &&
      this.userPassword === this.password
    ) {
      this.userEmail = "";
      this.userPassword = "";
      this.adminForm = true;
      return true;
    } else {
      alert("Uh oh! Check your inputs...");
      return false;
    }
  }
}
