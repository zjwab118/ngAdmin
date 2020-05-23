import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {path:"",component:LayoutComponent,
  children:[
    {path:"",loadChildren:()=>import("../home/home.module").then(mod=>mod.HomeModule)},
    {path:"user",loadChildren:()=>import("../user/user.module").then(mod=>mod.UserModule)},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
