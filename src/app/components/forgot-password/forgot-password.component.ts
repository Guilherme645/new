import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {
 email: string = '';
  emailError: string | null = null;
  contaCriada: boolean = false; 

  onSubmit() {
    this.validateEmail(); 

    if (!this.emailError) {
      setTimeout(() => {
        this.contaCriada = true;
      }, 500); 
    }
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  if (!emailPattern.test(this.email)) {
      this.emailError = "Insira um email válido.";
    } else {
      this.emailError = null;
    }
  }
}
