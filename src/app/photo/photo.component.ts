import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo = 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6137-3962-4162-a534-346433623839__960.jpg'
  getPhoto() {
    return this.photo;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
