import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  searchMode = false;
  searchText = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}

  activateSearch() {
    this.searchMode = true;
  }

  cancelSearch() {
    this.searchMode = false;
    this.searchText = '';
    this.projectsService.setSearchText('');
  }

  clearSearch() {
    this.searchText = '';
    this.projectsService.setSearchText('');
  }

  onSearchTextChange() {
    this.projectsService.setSearchText(this.searchText);
  }
}