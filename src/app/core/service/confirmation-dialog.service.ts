import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AlertService } from './alert.service';
import { TranslateGeralService } from './translate.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor(
    private confirmationService: ConfirmationService,
    private alertService: AlertService,
    private translateService: TranslateGeralService
) {}

  confirm(title: string, message: string, onAccept: () => void, acceptLabel?: string, rejectLabel? : string) {
    if (!acceptLabel) {
        acceptLabel = this.translator('yesImSure');
    }

    if (!rejectLabel) {
        rejectLabel = this.translator('noNotSure');
    }

    this.confirmationService.confirm({
      key: 'confirmationDialog',
      message: message,
      header: title,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel,
      rejectLabel,
      accept: onAccept,
      reject: () => {
        this.alertService.showMessage('info', this.translator('actionCanceledTitle'), this.translator('nothingChanged'));
      }
    });
  }

  translator(word: string){
    return this.translateService.getTranslation(word);
  }
}
