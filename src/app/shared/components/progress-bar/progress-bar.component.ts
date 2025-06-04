// progress-bar.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  standalone: false
})
export class ProgressBarComponent implements OnInit {
  @Input() state: 'default' | 'active' | 'complete' | 'error' | 'pause' | undefined = 'default';
  @Input() percent: number = 0;
  @Output() openRemoveCollection = new EventEmitter<void>();

  @Output() openRemoveProject = new EventEmitter<void>();

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
      case 'default': 
      case undefined: 
        return '';
    }
  }

  get showTrack(): boolean {
    return this.state === 'complete';
  }

  ngOnInit() {}

  handleProjectTrashClick() {
    this.openRemoveProject.emit();
  }

   handleCollectionTrashClick() {
    this.openRemoveCollection.emit();
  }
}