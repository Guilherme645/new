import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  projects: any[] = [];
  totalItems: number = 0;
  totalPages: number = 1;
  currentPage: number = 1;
showRemoveModal = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.projectsService.getPaginatedProjects(page).subscribe({
      next: (data) => {
        this.projects = data.projects.map(project => ({
          ...project,
          expanded: false,
          subcollections: [
            { name: ' 2025 - Primeiro trimestre', description: 'Coleção com os meses Janeiro, Fevereiro...', progressState: 'success', progressPercent: 100 },
            { name: ' 2024 - Quarto trimestre', description: 'Coleção com os meses Outubro, Novembro...', progressState: 'pending', progressPercent: 0 }
          ]
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

  closeModal() {
  this.showRemoveModal = false;
}
}