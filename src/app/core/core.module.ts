import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ServicesModule } from '../services/services.module';
//import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
//import { AppStoreModule } from '../store';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShareModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (HttpLoaderFactory),
      deps: [HttpClient]
      }}),
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被appModule引入');
    }
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
 }