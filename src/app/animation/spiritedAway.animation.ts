import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from "@angular/animations";

export let spiritedAway = trigger("videoIn", [
         transition("* => *", [
           query(".videoIn", style({ opacity: 0 }), {
             optional: true
           }),

           query(
             ".videoIn",
             stagger("3000ms", [
               animate(
                 "3s ease-in",
                 keyframes([
                   style({
                     opacity: 0,
                     transform: "translateY(75%)", //where it starts easing in
                     offset: 0
                   }),
                   style({
                     opacity: 0.5,
                     transform: "translateX(-30%)", //adjust position
                     offset: 0.3
                   }),
                   style({
                     opacity: 1,
                     transform: "translateY(0)", //default position
                     offset: 1
                   })
                 ])
               )
             ]),
             { optional: true }
           )
         ])
       ]);
