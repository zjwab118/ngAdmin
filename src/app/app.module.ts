import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {ErrorComponent as Error404 } from './view/error/404/error/error.component';
import { ShareModule } from './share/share.module';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
 }

@NgModule({
  declarations: [
    AppComponent,
    Error404,
  ],
  imports: [
    CoreModule,  
    ShareModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateHttpLoader),
      deps: [HttpClient]
      }}),
  ],
  exports:[
    TranslateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
 