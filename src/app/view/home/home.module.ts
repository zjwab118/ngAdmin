import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from 'src/app/share/share.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
 }

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {


 }
