import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    standalone: false
})
export class LoginPageComponent {
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  toastVisible = false;

  showToast(event: { type: 'success' | 'error'; message: string }) {
    this.toastMessage = event.message;
    this.toastType = event.type;
    this.toastVisible = true;

    // Ocultar após 3 segundos
    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }
}
