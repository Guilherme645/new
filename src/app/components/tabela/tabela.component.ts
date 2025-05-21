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

  constructor() {}

  ngOnInit() {}

  toggleItem(index: number) {
    this.data[index].expanded = !this.data[index].expanded;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  emitOpenRemove() {
  this.openRemove.emit(); // repassa o evento para ProjectsPageComponent
}

  sortBy(field: string) {
  if (this.sortField === field) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortField = field;
    this.sortDirection = 'asc';
  }

  this.sortData();
}

sortData() {
  this.data.sort((a, b) => {
    const valA = a[this.sortField]?.toString().toLowerCase() || '';
    const valB = b[this.sortField]?.toString().toLowerCase() || '';
    if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
}


toggleDropdown(index: number) {
  this.dropdownIndex = this.dropdownIndex === index ? null : index;
}

handleEdit() {
  this.dropdownIndex = null;
  // lógica de edição
}

handleDuplicate() {
  this.dropdownIndex = null;
  // lógica de duplicação
}

handleRemove() {
  this.dropdownIndex = null;
  // lógica de remoção
}
}