import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("photoState", [
      state(
        "move",
        style({
          transform: "translateX(-100%)"
        })
      ),
      state(
        "enlarge",
        style({
          transform: "scale(1.5)"
        })
      ),
      state(
        "spin",
        style({
          transform: "rotateY(180deg) rotateZ(90deg)"
        })
      ),
      transition("* => *", animate("500ms ease"))
    ])
  ]
})
export class AppComponent {

  hideShow = true;//set this as variable that is declared in the DOM, to manipulate property binding
  toggle() {
    this.hideShow = !this.hideShow;
  }
}


