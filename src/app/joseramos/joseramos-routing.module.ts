import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoseramosComponent } from './joseramos.component';

const routes: Routes = [{ path: '', component: JoseramosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoseramosRoutingModule { }
