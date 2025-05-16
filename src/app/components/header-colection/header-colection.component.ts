import { CollectionsService } from './../../services/collections.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-colection',
  templateUrl: './header-colection.component.html',
  styleUrls: ['./header-colection.component.css']
})
export class HeaderColectionComponent implements OnInit {
searchMode = false;
  searchText = '';

  constructor(private CollectionsService: CollectionsService) {}

  ngOnInit() {}

  activateSearch() {
    this.searchMode = true;
  }

  cancelSearch() {
    this.searchMode = false;
    this.searchText = '';
    this.CollectionsService.setSearchText('');
  }

  clearSearch() {
    this.searchText = '';
    this.CollectionsService.setSearchText('');
  }

  onSearchTextChange() {
    this.CollectionsService.setSearchText(this.searchText);
  }
}
