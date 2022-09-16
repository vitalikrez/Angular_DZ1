import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photo = 'https://api.quasa.io/storage/photos/shares/00-%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%203.jpg'
  getPhoto() {
    return this.photo;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
