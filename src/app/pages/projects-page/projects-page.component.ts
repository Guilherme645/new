import { Project, ProjectsService } from 'src/app/services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  constructor( private ProjectsService: ProjectsService) { }
projects: Project[] = [];

  ngOnInit() {
    this.ProjectsService.getProjects().subscribe({
      next: (data) => this.projects = data,
      error: (error) => console.error('Erro ao carregar coleções:', error)
    })
  }

}
