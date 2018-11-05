import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// adding routes
// adding the components
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { EventsComponent } from "./events/events.component";
import { StatementOfFaithComponent } from "./statement-of-faith/statement-of-faith.component";

//we use routes array and have a json of paths
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "statement-of-faith",
    component: StatementOfFaithComponent
  }
  // {
  //   path: "traversy",
  //   component: TraversyComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
