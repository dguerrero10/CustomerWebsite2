import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './home/home.component';
import { ConservationComponent } from './home/conservation/conservation.component';
import { ShowersFaucetsComponent } from './home/conservation/showers-faucets/showers-faucets.component';
import { FaqComponent } from './home/faq/faq.component';
import { GeneralFaqComponent } from './home/faq/general-faq/general-faq.component';
import { ConservationFaqComponent } from './home/faq/conservation-faq/conservation-faq.component';
import { UtilityFaqComponent } from './home/faq/utility-faq/utility-faq.component';
import { RateCalculatorComponent } from './home/rate-calculator/rate-calculator.component';
import { EducationComponent } from './home/education/education.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConservationComponent,
    ShowersFaucetsComponent,
    FaqComponent,
    GeneralFaqComponent,
    ConservationFaqComponent,
    UtilityFaqComponent,
    RateCalculatorComponent,
    EducationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
