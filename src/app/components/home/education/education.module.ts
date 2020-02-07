import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationComponent } from './education.component';
import { MaterialModule } from 'src/app/material/material.module';
import { EducationRoutingModule } from './education-routing.module';


@NgModule({
declarations: [
  EducationComponent
],
imports: [
  CommonModule,
  MaterialModule,
  EducationRoutingModule
]
})
export class EducationModule { }
