import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-create-project',
    templateUrl: './page-create-project.component.html',
    styleUrls: ['./page-create-project.component.css'],
    standalone: false
})
export class PageCreateProjectComponent implements OnInit {
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
