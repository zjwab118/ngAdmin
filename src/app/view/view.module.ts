

import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    LoginModule,
    UserModule
  ],
  exports: [
    HomeModule,
    LoginModule,
    UserModule
  ]
})
export class ViewModule { }
