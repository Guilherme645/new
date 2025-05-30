import { Injectable, TemplateRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AlertService {
  constructor(
    private messageService: MessageService,
  ) { }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      key: 'toast',
      detail: detail
    });
  }

  error(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', key: 'toast', detail: `${message}` });
  }

  info(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Info', key: 'toast', detail: `${message}` });
  }

  warn(message: string) {
    this.messageService.add({ severity: 'warn', summary: 'Warn', key: 'toast', detail: `${message}` });
  }

   success(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', key: 'toast', detail: `${message}` });
  }

  // error(message: string) {
  //   this.messageService.add({ severity: 'error', summary: this.translate('titleErrorMessage'), key: 'toast', detail: `${message}` });
  // }

  // success(message: string) {
  //   this.messageService.add({ severity: 'success', summary: this.translate('titleSuccessMessage'), key: 'toast', detail: `${message}` });
  // }

  // info(message: string) {
  //   this.messageService.add({ severity: 'info', summary: this.translate('titleInfoMessage'), key: 'toast', detail: `${message}` });
  // }

  // warn(message: string) {
  //   this.messageService.add({ severity: 'warn', summary: this.translate('titleWarningMessage'), key: 'toast', detail: `${message}` });
  // }
}
