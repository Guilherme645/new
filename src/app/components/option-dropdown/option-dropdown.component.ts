import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-option-dropdown',
  templateUrl: './option-dropdown.component.html',
})
export class OptionDropdownComponent {
  @Output() edit = new EventEmitter<void>();
  @Output() duplicate = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
  @Output() openRemove = new EventEmitter<void>(); // ✅ ADICIONE ESTA LINHA

  onEdit() {
    this.edit.emit();
  }

  onDuplicate() {
    this.duplicate.emit();
  }

  onRemove() {
    this.remove.emit();
  }

  openRemoveModal() {
    this.openRemove.emit(); // ✅ EMITE PARA O COMPONENTE PAI
  }
}
