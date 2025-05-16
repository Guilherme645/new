import { Component, OnInit } from '@angular/core';
import {  CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-colection-page',
  templateUrl: './colection-page.component.html',
  styleUrls: ['./colection-page.component.css']
})
export class ColectionPageComponent implements OnInit {

  constructor(private collectionsService: CollectionsService) {}
  collections: any[] = [];
  totalItems: number = 0;
  totalPages: number = 1;
  currentPage: number = 1;

  ngOnInit() {
    this.loadPage(this.currentPage);
  }

  loadPage(page: number) {
    this.collectionsService.getPaginatedCollections(page).subscribe({
      next: (data) => {
        this.collections = data.collection.map(collections => ({
          ...collections,
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
}
