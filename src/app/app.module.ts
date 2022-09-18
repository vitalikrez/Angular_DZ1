import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { SkillsComponent } from './skills/skills.component';
import { PhotoComponent } from './photo/photo.component';

import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    AppComponent,
    MainInfoComponent,
    SkillsComponent,
    PhotoComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
