import { Component, OnInit, OnDestroy } from '@angular/core';
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
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  isExpanded = true;
  activeMenuItem = 0;
  notificationVisible = false;
  private routeSubscription: Subscription | undefined;

  readonly menuItems: MenuItem[] = [
    { label: 'Início', iconClass: 'inicio-icon', route: '/dashboard', hasNotification: false },
    { label: 'Projetos', iconClass: 'projetos-icon', route: '/novo-projeto', hasNotification: false },
    { label: 'Coleções', iconClass: 'colecoes-icon', route: '/nova-coleção', hasNotification: false },
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
    item.route !== null && currentUrl.startsWith(item.route + '/')
      || currentUrl === item.route
  );

  this.activeMenuItem = foundIndex !== -1 ? foundIndex : 0;
}


}
