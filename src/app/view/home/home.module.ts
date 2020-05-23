import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    // CoreModule,
    ShareModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
