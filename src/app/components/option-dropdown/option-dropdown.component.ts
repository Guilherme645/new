import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-option-dropdown',
    templateUrl: './option-dropdown.component.html',
    standalone: false
})
export class OptionDropdownComponent {
  @Output() edit = new EventEmitter<void>();
  @Output() duplicate = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  @Output() openRemove = new EventEmitter<'index' | 'project'>(); // <– Tipo dinâmico

  onEdit() {
    this.edit.emit();
  }

  onDuplicate() {
    this.duplicate.emit();
  }

  onRemoveClick() {
    this.openRemove.emit('index'); // <– Aqui define o tipo ao clicar
  }
}
