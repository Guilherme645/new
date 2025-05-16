import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
    @Input() type: 'project' | 'collection' = 'project';

  searchMode = false;
  searchText = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}


activateSearch() {
  this.searchMode = true;
}

cancelSearch() {
  this.searchText = '';
  this.searchMode = false;
  this.onSearchTextChange();
}

clearSearch() {
  this.searchText = '';
  this.onSearchTextChange();
}



  onSearchTextChange() {
    this.projectsService.setSearchText(this.searchText);
  }
}