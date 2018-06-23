import { Component, OnInit } from '@angular/core';


declare var M: any; // 👈🏼to use `M` in Materialize

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit {

  //variables

  constructor() { }

  ngOnInit() {
  }


}
