import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public scheduleItems = [
    {
      "time": "15:00",
      "name": "welcome",
      "translation": "SCHEDULE.WELCOME"
    },
    {
      "time": "15:30",
      "name": "ceremony",
      "translation": "SCHEDULE.CEREMONY"
    },
    {
      "time": "16:00",
      "name": "meal",
      "translation": "SCHEDULE.MEAL"
    },
    {
      "time": "20:00",
      "name": "grill",
      "translation": "SCHEDULE.GRILL"
    },
    {
      "time": "23:00",
      "name": "cake",
      "translation": "SCHEDULE.CAKE"
    },
    {
      "time": "1:00",
      "name": "soup",
      "translation": "SCHEDULE.SOUP"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
