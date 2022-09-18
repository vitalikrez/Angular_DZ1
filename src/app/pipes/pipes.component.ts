import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
   <div> <h2> {{str | uppercase}}: birthday</h2></div>

      <div class="pipes">From object: {{dateObject | date}} </div>
      <div class="pipes">From string: {{dateString | date}} </div>
      <div class="pipes">From number: {{dateNumber | date}} </div>
      <div class="pipes">ShortDate: {{dateObject | date:'shortDate'}} </div>
      <div class="pipes">MediumDate: {{dateObject | date:'mediumDate'}} </div>      
      <div class="pipes">LongDate: {{dateObject | date:'longDate'}} </div>
      <div class="pipes">CustomDate: {{dateObject | date:'dd-MM-yyy'}} </div>
      <div class="pipes">UTC: {{dateObject | date:'dd-MM-yyy':"UTC"}} </div>
  `,
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent implements OnInit {

  str = 'pipes';

  dateObject: Date = new Date(1992, 6, 23);
  dateString = '1992-07-23T00:00:00.000Z';
  dateNumber = 711849600000;

  constructor() { }

  ngOnInit(): void {
  }

}
