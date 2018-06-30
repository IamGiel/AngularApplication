import { Component, OnInit } from "@angular/core";

@Component({
  // selector: "app-server",
  selector: ".app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.scss"]
})
export class ServerComponent {
  //properties here:
  btnDisabled: Boolean = false; // disable button using property binding
  hideForm: boolean = false;
  // event headers
  defaultTitle = "Event Title";
  photoUrl: any;
  defaultNote =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet quis, accusantium odit a porro doloribus blanditiis vitae repudiandae quo rem alias beatae sed deleniti enim, ad odio cumque et.";

  eventTitle: any;
  eventPhoto: any;
  eventNote: any;

  constructor() {
    setTimeout(() => {
      this.btnDisabled = true;
    }, 3000);
  }

  //if the user has typed values in the form allow display of event
  // displayEvent(){
  //   if()
  // }

  //methods

  onAdminForm() {
    this.hideForm = !this.hideForm;
  }

  //input
  onInputName(event: any) {
    // reference to DOM's $event = which gives access to events data
    console.log(event);
    this.defaultTitle = (<HTMLInputElement>event.target).value;
  }
  onInputPhoto(event: any) {
    // reference to DOM's $event = which gives access to events data
    console.log(event);
    this.photoUrl = (<HTMLInputElement>event.target).value;
  }
  onInputNote(event: any) {
    // reference to DOM's $event = which gives access to events data
    console.log(event);
    this.defaultNote = (<HTMLInputElement>event.target).value;
  }
  onMouseOut() {
    console.log("hello im out");
    this.hideForm = false;
  }
  printEvent(e) {
    e.preventDefault();
    console.log("printing event");
    this.defaultTitle = this.eventTitle;
    this.photoUrl = this.eventPhoto;
    this.defaultNote = this.eventNote;
    this.hideForm = !this.hideForm;
  }
}
