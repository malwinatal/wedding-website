import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  public scheduleItems = [
    {
      time: '15:00',
      name: 'welcome',
      translation: 'SCHEDULE.WELCOME',
      icon: 'fa-martini-glass',
    },
    {
      time: '16:00',
      name: 'ceremony',
      translation: 'SCHEDULE.CEREMONY',
      icon: 'fa-heart',
    },
    {
      time: '17:00',
      name: 'meal',
      translation: 'SCHEDULE.MEAL',
      icon: 'fa-utensils',
    },
    {
      time: '21:00',
      name: 'grill',
      translation: 'SCHEDULE.GRILL',
      materialIcon: true,
      icon: 'grill',
    },
    {
      time: '23:00',
      name: 'cake',
      translation: 'SCHEDULE.CAKE',
      icon: 'fa-cake-candles',
    },
    {
      time: '0:30',
      name: 'soup',
      translation: 'SCHEDULE.SOUP',
      materialIcon: true,
      icon: 'bowl-mix',
    },
    {
      time: '3:00',
      name: 'end',
      translation: 'SCHEDULE.END',
      icon: 'fa-bed',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
