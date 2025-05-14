import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  isOpen = false;
  checkboxes = [
    { id: 'status-indexando', label: 'Indexando', checked: true },
    { id: 'status-concluido', label: 'Concluído', checked: true },
    { id: 'status-erro', label: 'Erro', checked: true },
    { id: 'status-pause', label: 'Em pause', checked: true }
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
