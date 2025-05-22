import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  @Output() toast = new EventEmitter<{ type: 'success' | 'error'; message: string }>();

  email: string = '';
  password: string = '';
  showPassword = false;
  passwordFocused = false;
  emailFocused = false;

  // Erros
  emailError: string | null = null;
  passwordError: string | null = null;
  credentialsError: string | null = null;
  dadosVaziosError: string | null = null;

  private readonly emailCorreto = "admin@gmail.com";
  private readonly senhaCorreta = "123456";
  tentativasRestantes: number = 4;
  contaBloqueada: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    this.limparErros();

    if (this.contaBloqueada) {
      this.toast.emit({ type: 'error', message: 'Sua conta foi bloqueada, contate o suporte.' });
      return;
    }

    if (!this.email && !this.password) {
      this.dadosVaziosError = "Insira os dados para acessar sua conta.";
      this.toast.emit({ type: 'error', message: 'Preencha os campos.' });
      return;
    }

    this.validateEmail();
    this.validatePassword();

    if (this.emailError || this.passwordError) {
      this.toast.emit({ type: 'error', message: 'Dados inválidos.' });
      return;
    }

    if (this.email !== this.emailCorreto) {
      this.toast.emit({ type: 'error', message: 'O e-mail inserido está incorreto.' });
      return;
    }

    if (this.password !== this.senhaCorreta) {
      this.tentativasRestantes--;

      if (this.tentativasRestantes <= 0) {
        this.contaBloqueada = true;
        this.toast.emit({ type: 'error', message: 'Sua conta foi bloqueada, contate o suporte.' });
      } else {
        const tentativa = this.tentativasRestantes;
        this.toast.emit({
          type: 'error',
          message: `Senha incorreta, bloqueio após ${tentativa} tentativa${tentativa === 1 ? '' : 's'} incorreta${tentativa === 1 ? '' : 's'}.`
        });
      }

      return;
    }

    // Sucesso no login
    this.tentativasRestantes = 4;
    this.toast.emit({ type: 'success', message: 'Login realizado com sucesso!' });
    this.router.navigate(['/dashboard']);
  }

  get isFormInvalid(): boolean {
    return !(this.email && this.password);
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
  }

  validatePassword(): void {
    this.passwordError = !this.password ? 'Insira a senha para acessar sua conta.' : null;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  private limparErros(): void {
    this.emailError = null;
    this.passwordError = null;
    this.credentialsError = null;
    this.dadosVaziosError = null;
  }
}
