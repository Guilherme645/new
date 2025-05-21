import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  isExpanded: boolean = true;
  activeMenuItem: number = 0;

  menuItems = [
    { label: 'Início', iconClass: 'inicio-icon', route: '/home', hasNotification: false },
    { label: 'Projetos', iconClass: 'projetos-icon', route: '/novo-projeto', hasNotification: false },
    { label: 'Coleções', iconClass: 'colecoes-icon', route: '/nova-coleção', hasNotification: false },
    { label: 'Usuários', iconClass: 'usuarios-icon', route: '/users', hasNotification: false },
    { label: 'Notificações', iconClass: 'notificacoes-icon', route: '/notifications', hasNotification: true }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentRoute = this.router.url;
    const index = this.menuItems.findIndex(item => currentRoute.startsWith(item.route));
    this.activeMenuItem = index !== -1 ? index : 0;
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  setActiveMenuItem(index: number) {
    this.activeMenuItem = index;
    this.router.navigate([this.menuItems[index].route]);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
