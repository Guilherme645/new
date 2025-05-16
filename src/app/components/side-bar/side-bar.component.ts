import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  activeMenuItem: number = 0;

  menuItems = [
    { label: 'Início', iconClass: 'inicio-icon', route: '/inicio' },
    { label: 'Projetos', iconClass: 'projetos-icon', route: '/novo-projeto' },
    { label: 'Coleções', iconClass: 'colecoes-icon', route: '/nova-coleção' },
    { label: 'Usuários', iconClass: 'usuarios-icon', route: '/usuarios' },
    { label: 'Notificações', iconClass: 'notificacoes-icon', route: '/notificacoes' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentPath = this.router.url;
    const index = this.menuItems.findIndex(item => currentPath.startsWith(item.route));
    this.activeMenuItem = index !== -1 ? index : 0;
  }

  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }

  logout(): void {
    console.log('Logout clicado');
  }
  isExpanded = true;

/** Alterna o estado do sidebar */
toggleSidebar() {
  this.isExpanded = !this.isExpanded;
}

}
