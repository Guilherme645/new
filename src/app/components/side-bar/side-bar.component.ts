import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

 activeMenuItem: number = 0;

menuItems = [
  { label: 'Início', iconClass: 'inicio-icon', route: '/inicio' },
  { label: 'Projetos', iconClass: 'projetos-icon', route: '/novo-projeto' },
  { label: 'Coleções', iconClass: 'colecoes-icon', route: '/nova-coleção' },
  { label: 'Usuários', iconClass: 'usuarios-icon', route: '/usuarios' },
  { label: 'Notificações', iconClass: 'notificacoes-icon', route: '/notificacoes' }
];


  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
  }

  logout(): void {
    console.log('Logout clicked');
    // Aqui você pode implementar a lógica de logout, como chamar um serviço de autenticação
  }
  

}
