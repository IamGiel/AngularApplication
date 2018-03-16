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

export let homeAnimation = trigger("goals", [
         transition("* => *", [
           query(":enter", style({ opacity: 0 }), { optional: true }),
           query(
             ":enter",
             stagger("300ms", [
               animate(
                 ".6s ease-in",
                 keyframes([
                   style({
                     opacity: 0,
                     transform: "translateY(-75%)",
                     offset: 0
                   }),
                   style({
                     opacity: 0.5,
                     transform: "translateY(-35px)",
                     offset: 0.3
                   }),
                   style({
                     opacity: 1,
                     transform: "translateY(0)",
                     offset: 1
                   })
                 ])
               )
             ]),
             { optional: true }
           )
         ])
       ]);





// trigger("goals", [
//          transition(":enter", [
//            query("* => *", style({ opacity: 0 }), { optional: true }),
//            query(
//              ":enter",
//              stagger("300ms", [
//                animate(
//                  "3s ease-in",
//                  keyframes([
//                    style({
//                      opacity: 0,
//                      transform: "translateY(-75%)",
//                      offset: 0
//                    }),
//                    style({
//                      opacity: 0.5,
//                      transform: "translateY(-35px)",
//                      offset: 0.3
//                    }),
//                    style({
//                      opacity: 1,
//                      transform: "translateY(0)",
//                      offset: 1
//                    })
//                  ])
//                )
//              ]),
//              { optional: true }
//            )
//          ])
//        ]);
