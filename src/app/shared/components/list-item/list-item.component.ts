import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  standalone: false
})
export class ListItemComponent {
  tabs = [
    {
      state: 'active',
      icon: {
        left: '12.5%',
        right: '12.5%',
        top: '12.5%',
        bottom: '12.5%',
        width: '6',
        height: '6'
      },
      title: 'Coleção e indexação',
      description: 'Informações básicas e indexação',
      activeStyles: 'bg-[#D6DBF7] border-l-4 border-[#273DAE]'
    },
    {
      state: 'Default',
      icon: {
        left: '13.92%',
        right: '13.92%',
        top: '9.62%',
        bottom: '9.62%',
        width: '6',
        height: '6'
      },
      title: 'Configurações da coleção',
      description: 'Detalhes dos registros',
      activeStyles: ''
    },
    {
      state: 'Default',
      icon: {
        left: '12.5%',
        right: '12.5%',
        top: '16.67%',
        bottom: '16.67%',
        width: '6',
        height: '6'
      },
      title: 'Pipeline',
      description: 'Estágio de processamento dos registros',
      activeStyles: ''
    },
    {
      state: 'Default',
      icon: {
        left: '16.67%',
        right: '16.67%',
        top: '8.33%',
        bottom: '16.67%',
        width: '6',
        height: '6'
      },
      title: 'Agendamento',
      description: 'Configurações de períodos',
      activeStyles: ''
    }
  ];

  selectTab(index: number) {
    this.tabs = this.tabs.map((tab, i) => ({
      ...tab,
      state: i === index ? 'active' : 'Default',
      activeStyles: i === index ? 'bg-[#D6DBF7] border-l-4 border-[#273DAE]' : ''
    }));
  }
}