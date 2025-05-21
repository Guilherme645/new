import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
isExpanded = true;
  activeMenuItem = 0;
notificationVisible: boolean = false;

  menuItems = [
    { label: 'Início', iconClass: 'inicio-icon', route: '/home', hasNotification: false },
    { label: 'Projetos', iconClass: 'projetos-icon', route: '/novo-projeto', hasNotification: false },
    { label: 'Coleções', iconClass: 'colecoes-icon', route: '/nova-coleção', hasNotification: false },
    { label: 'Usuários', iconClass: 'usuarios-icon', route: '/users', hasNotification: false },
    { label: 'Notificações', iconClass: 'notificacoes-icon', route: '/notifications', hasNotification: true }
  ];
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  handleMenuClick(index: number, iconClass: string) {
    if (iconClass === 'notificacoes-icon') {
      this.notificationVisible = !this.notificationVisible;
    } else {
      this.setActiveMenuItem(index);
    }
  }

  setActiveMenuItem(index: number) {
    this.activeMenuItem = index;
    this.notificationVisible = false; // Close notifications when navigating
  }

  logout() {
    // Implement logout logic
    console.log('Logout clicked');
  }
}