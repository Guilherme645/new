import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
})
export class NotificationCardComponent {
  @Input() tipo: 'info' | 'success' | 'error' = 'info';
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() data!: string;

  clicado = false;

  marcarComoClicada() {
    this.clicado = true;
  }

  get corPrimaria(): string {
    switch (this.tipo) {
      case 'success':
        return '#027A48';
      case 'error':
        return '#D92D20';
      default:
        return '#314CD9'; 
    }
  }
}
