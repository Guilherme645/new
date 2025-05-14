import { Component, OnInit } from '@angular/core';
import { Collection, CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-colection-page',
  templateUrl: './colection-page.component.html',
  styleUrls: ['./colection-page.component.css']
})
export class ColectionPageComponent implements OnInit {
  collections: Collection[] = [];

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit() {
    this.collectionsService.getCollections().subscribe({
      next: (data) => this.collections = data,
      error: (error) => console.error('Erro ao carregar coleções:', error)
    });
  }
}
