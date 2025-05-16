import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

export interface Collection {
  name: string;
  description: string;
  progressState: 'default' | 'active' | 'complete' | 'error' | 'pause';
  progressPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private jsonUrl = 'assets/collections.json';
   private collectionSubject = new BehaviorSubject<Collection[]>([]);
    private searchTextSubject = new BehaviorSubject<string>('');
    private pageSize = 7; // Number of items per page

    constructor(private http: HttpClient) {
    this.loadCollections();
  }


   private loadCollections() {
      this.http.get<Collection[]>(this.jsonUrl).subscribe({
        next: (projects) => this.collectionSubject.next(projects),
        error: (error) => console.error('Error fetching projects:', error)
      });
    }
  
    setSearchText(searchText: string) {
      this.searchTextSubject.next(searchText);
    }

  getPaginatedCollections(page: number, pageSize: number = this.pageSize): Observable<{
      collection: Collection[];
      totalItems: number;
      totalPages: number;
      currentPage: number;
    }> {
      return combineLatest([this.collectionSubject, this.searchTextSubject]).pipe(
        map(([Collection, searchText]) => {
          let filteredCollection = Collection;
          if (searchText.trim()) {
            const lowerSearch = searchText.toLowerCase();
            filteredCollection = Collection.filter(
              (Collection) =>
                Collection.name.toLowerCase().includes(lowerSearch) ||
                Collection.description.toLowerCase().includes(lowerSearch)
            );
          }
  
          const totalItems = filteredCollection.length;
          const totalPages = Math.ceil(totalItems / pageSize);
          const startIndex = (page - 1) * pageSize;
          const paginatedCollections = filteredCollection.slice(startIndex, startIndex + pageSize);
  
          return {
            collection: paginatedCollections,
            totalItems,
            totalPages,
            currentPage: page
          };
        })
      );
    }
}
