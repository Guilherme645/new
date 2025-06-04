import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Collection } from 'src/app/core/models/collection';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
  standalone: false
})
export class TabelaComponent implements OnInit {
  @Input() data: Collection[] = [];
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

  ngOnInit() {}

  toggleItem(index: number) {
    if (this.data[index]) {
      this.data[index].expanded = !this.data[index].expanded;
    }
  }

  emitOpenRemoveProject() {
    this.openRemoveTyped.emit('project');
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
    this.dropdownIndex = null;
    this.openRemove.emit();
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
      const sortKey = this.sortField as keyof Collection;
      const valA = (a[sortKey] as any)?.toString().toLowerCase() || '';
      const valB = (b[sortKey] as any)?.toString().toLowerCase() || '';

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
  }

  handleDuplicate() {
    this.dropdownIndex = null;
  }

  handleRemove() {
    this.dropdownIndex = null;
  }

  openModal(type: 'index' | 'project') {
    this.modalType = type;
    this.showRemoveModal = true;
  }

  closeModal() {
    this.showRemoveModal = false;
  }
}
