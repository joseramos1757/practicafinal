import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoseramosRoutingModule } from './joseramos-routing.module';
import { JoseramosComponent } from './joseramos.component';


@NgModule({
  declarations: [
    JoseramosComponent
  ],
  imports: [
    CommonModule,
    JoseramosRoutingModule
  ]
})
export class JoseramosModule { }
