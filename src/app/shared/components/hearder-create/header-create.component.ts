import { Component, Input, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/collections/service/collections.service';
import { ProjectsService } from 'src/app/projects/services/projects.service';

@Component({
  selector: 'app-header-create',
  templateUrl: './header-create.component.html',
  styleUrls: ['./header-create.component.css'],
  standalone: false,
})
export class HeaderCreateComponent implements OnInit {

@Input() type: 'project' | 'collection' = 'project';

  searchMode = false;
  searchText = '';
searchFocused = false;
searchError = false; 
  constructor(
    private projectsService: ProjectsService,
  private collectionsService: CollectionsService
  ) {}

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
    this.collectionsService.setSearchText(this.searchText);
  }

}
