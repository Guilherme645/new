
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotificationService, Notification } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];

  @Output() close = new EventEmitter<void>();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
  }

  onClose(): void {
    this.close.emit();
  }
}
