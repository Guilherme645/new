import { Injectable } from '@angular/core';

export interface Notification {
  tipo: 'info' | 'success' | 'error';
  titulo: string;
  descricao: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Notification[] = [
    {
      tipo: 'info',
      titulo: 'Parâmetro alcançado',
      descricao: 'Você definiu os parâmetros: X,Y e Z para um alerta, e este foi alcançado, clique e veja o resultado.',
      data: '07/05/25 às 14:30'
    },
    {
      tipo: 'success',
      titulo: 'A indexação foi bem sucedida',
      descricao: 'A indexação da coleção: <strong>Documentos Sigilosos</strong> foi finalizada com sucesso.',
      data: '07/05/25 às 13:52'
    },
    {
      tipo: 'error',
      titulo: 'Ocorreu algum erro',
      descricao: 'Algum erro ocorreu na indexação da coleção: Transações Financeiras.',
      data: '07/05/25 às 11:37'
    },
   
  ];

  constructor() {}

  getNotifications(): Notification[] {
    return this.notifications;
  }
}
