import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
  @Input() message: string = 'Toast text';
  @Input() type: 'success' | 'error' = 'success';
  visible = true;

  close() {
    this.visible = false;
  }
}
