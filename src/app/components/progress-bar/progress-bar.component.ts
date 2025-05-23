import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() state: 'default' | 'active' | 'complete' | 'error' | 'pause' = 'default';
  @Input() percent: number = 0;

  @Output() openRemoveProject = new EventEmitter<void>(); // 👈 Emitimos para o pai

  get fillWidth(): string {
    const totalWidth = 148;
    return `${(this.percent / 100) * totalWidth}px`;
  }

  get fillClass(): string {
    switch (this.state) {
      case 'active':
        return 'azul';
      case 'complete':
        return 'verde';
      case 'error':
        return 'vermelho';
      case 'pause':
        return 'laranja';
      default:
        return '';
    }
  }

  get showTrack(): boolean {
    return this.state === 'complete';
  }

  ngOnInit() {}

  handleTrashClick() {
    this.openRemoveProject.emit(); // 👈 envia para o pai
  }
}
