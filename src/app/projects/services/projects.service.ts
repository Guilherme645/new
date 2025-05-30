import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

export interface Project {
  name: string;
  description: string;
  progressState: 'default' | 'active' | 'complete' | 'error' | 'pause';
  progressPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private jsonUrl = 'assets/projects.json';
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  private searchTextSubject = new BehaviorSubject<string>('');
  private pageSize = 7; // Number of items per page

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  private loadProjects() {
    this.http.get<Project[]>(this.jsonUrl).subscribe({
      next: (projects) => this.projectsSubject.next(projects),
      error: (error) => console.error('Error fetching projects:', error)
    });
  }

  setSearchText(searchText: string) {
    this.searchTextSubject.next(searchText);
  }

  getPaginatedProjects(page: number, pageSize: number = this.pageSize): Observable<{
    projects: Project[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  }> {
    return combineLatest([this.projectsSubject, this.searchTextSubject]).pipe(
      map(([projects, searchText]) => {
        let filteredProjects = projects;
        if (searchText.trim()) {
          const lowerSearch = searchText.toLowerCase();
          filteredProjects = projects.filter(
            (project) =>
              project.name.toLowerCase().includes(lowerSearch) ||
              project.description.toLowerCase().includes(lowerSearch)
          );
        }

        const totalItems = filteredProjects.length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const startIndex = (page - 1) * pageSize;
        const paginatedProjects = filteredProjects.slice(startIndex, startIndex + pageSize);

        return {
          projects: paginatedProjects,
          totalItems,
          totalPages,
          currentPage: page
        };
      })
    );
  }
}