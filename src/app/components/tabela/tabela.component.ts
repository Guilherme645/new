import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  projects: Project[] = [];
  @Input() data: any[] = [];
  @Input() type: 'project' | 'collection' = 'project';
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        // Adicionando a propriedade expanded e coleções fictícias para cada projeto
        this.data = this.projects.map(project => ({
          ...project,
          expanded: false,
          collections: [
            { name: '(Coleção) 2025 - Primeiro trimestre', description: 'Coleção com os meses Janeiro, Fevereiro...', progressState: 'success', progressPercent: 100 },
            { name: '(Coleção) 2024 - Quarto trimestre', description: 'Coleção com os meses Outubro, Novembro...', progressState: 'pending', progressPercent: 0 }
          ]
        }));
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }
  toggleItem(index: number) {
  this.data[index].expanded = !this.data[index].expanded;
}

}
