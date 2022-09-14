import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Інформація про мене!';
  firstname = 'Віталій'
  lastname = 'Резь'

  workTime = 5;
  getWorkTime() {
    return this.workTime;
  }

  skills = 'Hard skills AND Soft skills.'
  getSkills() {
    return this.skills;
  }
  knowledge = 'Математика, логычны задачы, аолгоритми.'
  getKnowledge() {
    return this.knowledge;
  }
  certificates = 'PHP, Java, JS.'
  getCertificates() {
    return this.certificates;
  }

  photo = 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_346574/images/tild6137-3962-4162-a534-346433623839__960.jpg'
  getPhoto() {
    return this.photo;
  }

}
