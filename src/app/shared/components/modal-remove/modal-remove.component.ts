import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal-remove',
    templateUrl: './modal-remove.component.html',
    styleUrls: ['./modal-remove.component.css'],
    standalone: false
})
export class ModalRemoveComponent {
  @Input() type: 'project' | 'index' = 'project';
  @Output() onClose = new EventEmitter<void>(); // <- Aqui

  inputValue: string = '';

  get isProject(): boolean {
    return this.type === 'project';
  }

  get isIndex(): boolean {
    return this.type === 'index';
  }

  isValid(): boolean {
    return (this.isProject && this.inputValue === 'Legislações') || (this.isIndex && this.inputValue.toUpperCase() === 'APAGAR');
  }

  cancel(): void {
    this.onClose.emit(); 
  }
}
