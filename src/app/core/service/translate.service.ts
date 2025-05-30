import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateGeralService {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() ?? 'en';
    translate.use(browserLang.match(/en|pt|es/) ? browserLang : 'en');
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  getTranslation(key: string): string {
    return this.translate.instant(key);
  }
}
