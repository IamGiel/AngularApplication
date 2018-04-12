import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //double binding
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // npm install @angular/animations@latest --save
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DataService } from "./data.service";
import { HeroesComponent } from './heroes/heroes.component';
import { heroService } from "./heroes/heroes.service";
import { TraversyComponent } from './traversy/traversy.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, HeroesComponent, TraversyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //double binding
    BrowserAnimationsModule
  ],
  providers: [DataService, heroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
