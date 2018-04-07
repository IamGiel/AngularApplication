import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// adding routes
// adding the components
import { HomeComponent } from './home/home.component'
import { AboutComponent } from "./about/about.component";
import { HeroesComponent } from "./heroes/heroes.component";


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
    path: "heroes",
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
