import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConservationComponent } from './home/conservation/conservation.component';
import { FaqComponent } from './home/faq/faq.component';
import { RateCalculatorComponent } from './home/rate-calculator/rate-calculator.component';
import { EducationComponent } from './home/education/education.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conservation', component: ConservationComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'rate-calculator', component: RateCalculatorComponent },
  { path: 'education', component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
