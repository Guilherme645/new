import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  searchMode = false;
  searchText = '';

  constructor() {}

  ngOnInit() {}

  activateSearch() {
    this.searchMode = true;
  }

  cancelSearch() {
    this.searchMode = false;
    this.searchText = '';
  }

  clearSearch() {
    this.searchText = '';
  }
}
