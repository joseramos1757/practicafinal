import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutwebsiteComponent } from './layouts/layoutwebsite/layoutwebsite.component';

const routes: Routes = [
  {path:'',redirectTo:'website', pathMatch:"full"},
  {path:'',
  component:LayoutwebsiteComponent,
  children:[
  { path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }]
},
  { path: 'joseramos', loadChildren: () => import('./joseramos/joseramos.module').then(m => m.JoseramosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
