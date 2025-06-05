import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  standalone: false
})
export class ListItemComponent {
    @Output() tabSelectedEvent = new EventEmitter<string>(); // Saída do evento

tabs = [
    {
      state: 'active', // O estado inicial pode ser definido aqui ou no pai
      title: 'Coleção e indexação',
      description: 'Informações básicas e indexação',
      activeStyles: 'bg-[#D6DBF7] border-l-4 border-[#273DAE]', // Considere usar CSS com [data-state]
      formKey: 'collection_info_indexing' // Chave para identificar a seção
    },
    {
      state: 'default',
      title: 'Configurações da coleção',
      description: 'Detalhes dos registros',
      activeStyles: '',
      formKey: 'collection_settings'
    },
    {
      state: 'default',
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
      state: 'default',
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

selectTab(index: number): void {
    const selectedTab = this.tabs[index];

    this.tabs.forEach((tab, i) => {
      tab.state = i === index ? 'active' : 'default';
      tab.activeStyles = i === index ? 'bg-[#D6DBF7] border-l-4 border-[#273DAE]' : '';
    });

    this.tabSelectedEvent.emit(selectedTab.formKey); 
  }

  hoverTab(index: number): void {
    const tab = this.tabs[index];
    if (tab.state !== 'active') {
      tab.state = 'hover';
      tab.activeStyles = 'bg-[#D6DBF7]'; // Estilo de hover sem borda
    }
  }

  unhoverTab(index: number): void {
    const tab = this.tabs[index];
    if (tab.state === 'hover') {
      tab.state = 'default';
      tab.activeStyles = ''; // Volta ao estilo default
    }
  }

  getTabStyles(index: number): string {
    const tab = this.tabs[index];
    return tab.activeStyles || '';
  }
}