import { Component, OnInit, Input } from '@angular/core'; // Importe Input
import { Collection } from 'src/app/core/models/collection';
import { CollectionsService } from '../../service/collections.service';

@Component({
  selector: 'app-collection-tree',
  templateUrl: './collection-tree.component.html',
  styleUrls: ['./collection-tree.component.css'],
  standalone: false
})
export class CollectionTreeComponent implements OnInit {
  @Input() data: Collection[] = []; 
  collections: Collection[] = []; 
  currentPage: number = 1;
  pageSize: number = 7;

  constructor(private collectionsService: CollectionsService) {}

  ngOnInit() {
    this.loadCollections(); 
  }

  loadCollections() {
    this.collectionsService.getPaginatedCollections(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.collections = data.collection; 
      },
      error: (error) => console.error('Erro ao carregar coleções:', error)
    });
  }

  onSearch(searchText: string) {
    this.collectionsService.setSearchText(searchText);
    this.currentPage = 1;
    this.loadCollections();
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.loadCollections();
  }
}