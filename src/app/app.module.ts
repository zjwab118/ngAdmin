import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorComponent as Error404 } from './view/error/404/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404,
  ],
  imports: [
    CoreModule
  ],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
