import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lang = this.getNavigatorLanguage().split('-')[0];
  languages = [{ lan: 'en', label: 'ENGLISH' }, { lan: 'hu', label: 'HUNGARIAN' }];

  title = 'frontend';
  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(this.lang);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.lang);
  }
  onLangChange(value) {
    this.translate.use(this.lang);
  }

  getNavigatorLanguage() {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language || 'en-EN';
  }
}
