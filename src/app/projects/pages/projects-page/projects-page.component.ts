import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from 'src/app/projects/services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css'],
  standalone: false
})
export class ProjectsPageComponent implements OnInit {
  projects: Project[] = []; 
  totalItems: number = 0;
  totalPages: number = 1;
  currentPage: number = 1;
  showRemoveModal = false;
  exibirModal: boolean = false;
  modalType: 'index' | 'project' = 'index';
  isSidebarExpanded = true;
  notificationVisible = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.projectsService.getPaginatedProjects(page).subscribe({
      next: (data) => {
        this.projects = data.projects.map(project => ({
          ...project,
        }));
        this.totalItems = data.totalItems;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
      },
      error: (error) => console.error('Erro ao carregar projetos:', error)
    });
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.loadPage(page);
    }
  }

  openModal(type: 'index' | 'project') {
    this.modalType = type;
    this.showRemoveModal = true;
  }

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  fecharModal() {
    this.showRemoveModal = false;
  }

  handleToggleNotification() {
    this.notificationVisible = !this.notificationVisible;
  }
}