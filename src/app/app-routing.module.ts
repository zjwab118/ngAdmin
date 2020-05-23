import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent as Error404 } from './view/error/404/error/error.component';
import { TranslateModule } from '@ngx-translate/core';



const routes: Routes = [
  {    path: 'home',    loadChildren: () => import('./view/layout/layout.module').then(mod => mod.LayoutModule)  },
  {    path: 'login',    loadChildren: () => import('./view/login/login.module').then(mod => mod.LoginModule)  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:Error404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  }),
  ],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
