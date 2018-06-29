import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //double binding
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // npm install @angular/animations@latest --save
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { DataService } from "./data.service";
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ServerComponent } from './server/server.component'


@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, EventsComponent, ServerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //double binding
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
