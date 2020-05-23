import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngAdmin1';
  constructor(public translate:TranslateService) { }

  async ngOnInit(){
    console.log(environment)
    this.changeLanguage('zh-CN');
   
  }

  async changeLanguage(lan:string){
    lan =lan||  await localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang()||"zh-CN";
    this.translate.setDefaultLang(lan);
    this.translate.use(lan);
    // 记录当前设置的语言
    localStorage.setItem('currentLanguage', lan)
  
  }
}
