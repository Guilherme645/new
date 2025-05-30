import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbs: any[] = [];

  constructor() {}

  getBreadcrumbs() {
    return this.breadcrumbs;
  }

  setBreadcrumbs(breadcrumbs: any[]) {
    this.breadcrumbs = breadcrumbs;
  }
}
