import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() type: 'project' | 'collection' = 'project';
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();
sortField: string = '';
sortDirection: 'asc' | 'desc' = 'asc';
dropdownIndex: number | null = null;
@Output() edit = new EventEmitter<any>();
@Output() duplicate = new EventEmitter<any>();
@Output() remove = new EventEmitter<any>();
@Output() openRemove = new EventEmitter<void>();
modalType: 'index' | 'project' = 'index';
showRemoveModal = false;
@Output() openRemoveTyped = new EventEmitter<'index' | 'project'>();

 constructor() {}

  // Método do ciclo de vida OnInit (executado na inicialização do componente)
  ngOnInit() {
    // TODO: Adicionar lógica de inicialização, se necessário (ex.: carregar dados iniciais)
  }

  // Alterna o estado de expansão de uma linha (usado para exibir subcoleções em projetos)
  toggleItem(index: number) {
    this.data[index].expanded = !this.data[index].expanded; // Inverte o valor de 'expanded' para a linha especificada
  }

  // Emite um evento para abrir o modal de remoção de projeto
  emitOpenRemoveProject() {
    this.openRemoveTyped.emit('project'); // Emite o tipo 'project' para o componente pai
  }

  // Navega para a página anterior, se disponível
  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1); // Emite a nova página (atual - 1)
    }
  }

  // Navega para a próxima página, se disponível
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1); // Emite a nova página (atual + 1)
    }
  }

  // Emite um evento para abrir o modal de remoção e fecha o dropdown
  emitOpenRemove() {
    this.dropdownIndex = null; // Fecha o dropdown de opções
    this.openRemove.emit(); // Emite evento para o componente pai abrir o modal
  }

  // Configura a ordenação com base no campo clicado
sortBy(field: string) {
  if (this.sortField === field) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortField = field;
    this.sortDirection = 'asc';
  }
    // Aplica a ordenação aos dados
    this.sortData();
  }

  // Ordena os dados com base em sortField e sortDirection
  sortData() {
    this.data.sort((a, b) => {
      // Converte os valores para strings e minúsculas para comparação
      const valA = a[this.sortField]?.toString().toLowerCase() || '';
      const valB = b[this.sortField]?.toString().toLowerCase() || '';
      // Compara os valores e aplica a direção da ordenação
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Alterna a visibilidade do dropdown de opções para uma linha específica
  toggleDropdown(index: number) {
    this.dropdownIndex = this.dropdownIndex === index ? null : index; // Abre ou fecha o dropdown
  }

  // Lida com a ação de edição (fechará o dropdown)
  handleEdit() {
    this.dropdownIndex = null; // Fecha o dropdown
    // TODO: Implementar lógica de edição (ex.: emitir evento com this.edit.emit(item))
  }

  // Lida com a ação de duplicação (fechará o dropdown)
  handleDuplicate() {
    this.dropdownIndex = null; // Fecha o dropdown
    // TODO: Implementar lógica de duplicação (ex.: emitir evento com this.duplicate.emit(item))
  }

  // Lida com a ação de remoção (fechará o dropdown)
  handleRemove() {
    this.dropdownIndex = null; // Fecha o dropdown
    // TODO: Implementar lógica de remoção (ex.: emitir evento com this.remove.emit(item))
  }

  // Abre o modal de remoção com o tipo especificado
  openModal(type: 'index' | 'project') {
    this.modalType = type; // Define o tipo do modal
    this.showRemoveModal = true; // Exibe o modal
  }

  // Fecha o modal de remoção
  closeModal() {
    this.showRemoveModal = false; // Oculta o modal
  }
}