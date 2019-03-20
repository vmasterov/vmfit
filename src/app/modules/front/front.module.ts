import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { DietComponent } from './components/diet/diet.component';

@NgModule({
  declarations: [DietComponent],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
