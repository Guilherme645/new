import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
standalone:false
})
export class LoginComponent {
  @Output() toast = new EventEmitter<{ type: 'success' | 'error'; message: string }>();

  email: string = '';
  password: string = '';
  showPassword = false;
  passwordFocused = false;
  emailFocused = false;

  emailError: string | null = null;
  passwordError: string | null = null;
  credentialsError: string | null = null;
  dadosVaziosError: string | null = null;

 
  tentativasRestantes: number = 4;
  contaBloqueada: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService 
  ) {}

  async onLogin(): Promise<void> {
    // this.limparErros();

    // if (this.contaBloqueada) { 
    //   this.toast.emit({ type: 'error', message: 'Sua conta foi bloqueada, contate o suporte.' });
    //   return;
    // }

    // if (!this.email && !this.password) {
    //   this.dadosVaziosError = "Insira os dados para acessar sua conta.";
    //   this.emailError = 'O email é obrigatório.'; 
    //   this.passwordError = 'Insira a senha para acessar sua conta.'; 
    //   this.toast.emit({ type: 'error', message: 'Preencha os campos de e-mail e senha.' });
    //   return;
    // }

    // this.validateEmail();
    // this.validatePassword();

    // if (this.emailError || (this.passwordError && this.passwordError !== ' ' && !this.dadosVaziosError) ) {
    //   this.toast.emit({ type: 'error', message: 'Dados inválidos. Verifique os campos destacados.' });
    //   return;
    // }



    // try {
    //   console.log('Tentando fazer login com o AuthService para:', this.email);
    //   await this.authService.loginAuth(this.email, this.password); 

    //   this.tentativasRestantes = 4;
    //   this.contaBloqueada = false;
    //   this.toast.emit({ type: 'success', message: 'Login realizado com sucesso!' });
    //   this.router.navigate(['/nova-colecao']);

    // } catch (error: any) { 
    //   console.error("Erro ao realizar login via AuthService:", error);
    //   let errorMessage = 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.';
    //   this.credentialsError = errorMessage;


    //   if (error && error.status === 401) { 
    //     errorMessage = 'E-mail ou senha inválidos.';
    //     this.credentialsError = errorMessage; 
    //     this.passwordError = ' '; 
    //   } else if (error && error.status === 400 && error.error?.error_description?.toLowerCase().includes("account disabled")) {
    //     errorMessage = 'Sua conta está desabilitada. Contate o suporte.';
    //     this.credentialsError = errorMessage;
    //     this.contaBloqueada = true;
    //   }
    //   // Adicione outros tratamentos de erro específicos aqui (ex: error.status === 500, etc.)

    //   this.toast.emit({ type: 'error', message: errorMessage });
    // }
  }

  get isFormInvalid(): boolean {
    return !(this.email && this.password) || !!this.emailError;
  }

  validateEmail(): void {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email) {
      this.emailError = 'O email é obrigatório.';
    } else if (!pattern.test(this.email)) {
      this.emailError = 'Insira um email válido.';
    } else {
      this.emailError = null;
    }
    if (this.credentialsError && this.email) this.credentialsError = null;
  }

  validatePassword(): void {
    if (!this.password) {
      this.passwordError = 'Insira a senha para acessar sua conta.';
    } else {
      if (this.passwordError !== ' ') { // Só limpa se não for o indicador de falha de credencial
          this.passwordError = null;
      }
    }
    if (this.credentialsError && this.password) this.credentialsError = null;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  private limparErros(): void {
    this.emailError = null;
    if (this.passwordError !== ' ') { // Só limpa se não for o indicador de falha de credencial
        this.passwordError = null;
    }
    this.credentialsError = null;
    this.dadosVaziosError = null;
  }
}