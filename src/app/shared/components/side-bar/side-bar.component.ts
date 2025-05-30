import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  iconClass: string;
  route: string | null;
  hasNotification: boolean;
}

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
    standalone: false
})
export class SideBarComponent implements OnInit, OnDestroy {

activeMenuItem: number | null = null;
  notificationVisible = false;
  private routeSubscription: Subscription | undefined;
  @Input() isExpanded = true; // 👈 Adicione esta linha
  @Output() toggle = new EventEmitter<void>();
@Output() toggleNotification = new EventEmitter<void>();
  readonly menuItems: MenuItem[] = [
    { label: 'Início', iconClass: 'inicio-icon', route: '/dashboard', hasNotification: false },
    { label: 'Projetos', iconClass: 'projetos-icon', route: '/novo-projeto', hasNotification: false },
    { label: 'Coleções', iconClass: 'colecoes-icon', route: '/nova-colecao', hasNotification: false },
    { label: 'Usuários', iconClass: 'usuarios-icon', route: '/users', hasNotification: false },
    { label: 'Notificações', iconClass: 'notificacoes-icon', route: null, hasNotification: true }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveMenuItemByRoute(this.router.url); // define ao carregar

    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.setActiveMenuItemByRoute(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  toggleSidebar(): void {
  this.isExpanded = !this.isExpanded;
  this.toggle.emit();
}

  handleMenuClick(index: number, iconClass: string): void {
    if (iconClass === 'notificacoes-icon') {
      this.toggleNotifications();
    } else {
      this.setActiveMenuItem(index);
      this.navigateTo(this.menuItems[index].route);
    }
  }

  setActiveMenuItem(index: number): void {
    this.activeMenuItem = index;
    this.notificationVisible = false;
  }

 toggleNotifications(): void {
  this.notificationVisible = !this.notificationVisible;
  this.toggleNotification.emit(); 
}

  navigateTo(route: string | null): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  logout(): void {
    this.router.navigate(['/login']);
    console.log('Usuário deslogado');
  }

private setActiveMenuItemByRoute(currentUrl: string): void {
  const foundIndex = this.menuItems.findIndex(item =>
    item.route !== null && (
      currentUrl === item.route || currentUrl.startsWith(item.route + '/')
    )
  );

  this.activeMenuItem = foundIndex !== -1 ? foundIndex : null;
}


}
