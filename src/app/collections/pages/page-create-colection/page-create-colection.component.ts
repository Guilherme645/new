import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-create-colection',
    templateUrl: './page-create-colection.component.html',
    styleUrls: ['./page-create-colection.component.css'],
    standalone: false
})
export class PageCreateColectionComponent implements OnInit {
isSidebarExpanded = true;
notificationVisible = false;
  constructor() { }

  ngOnInit() {
  }

toggleSidebar(): void {
  this.isSidebarExpanded = !this.isSidebarExpanded;
}


handleToggleNotification() {
  this.notificationVisible = !this.notificationVisible;
}
}