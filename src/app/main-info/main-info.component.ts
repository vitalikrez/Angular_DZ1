import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  firstname = 'Віталій'
  lastname = 'Резь'
  workTime = 10;

  getWorkTime() {
    return this.workTime;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
