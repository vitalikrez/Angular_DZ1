import { Component, OnInit } from '@angular/core';
import { MySkills } from './list-skills';
import { Skills } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = MySkills;

selectedItem!:Skills;

onSelect(item:Skills): void{
  this.selectedItem = item;
}



  /*
  skills = 'Hard skills AND Soft skills.'
  getSkills() {
    return this.skills;
  }
  knowledge = 'Математика, логічні задачі, алгоритми.'
  getKnowledge() {
    return this.knowledge;
  }
  certificates = 'PHP, Java, JS.'
  getCertificates() {
    return this.certificates;
  }
  */
  constructor() { }

  ngOnInit(): void {
  }

}
