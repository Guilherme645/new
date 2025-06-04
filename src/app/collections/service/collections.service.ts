import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { Collection } from 'src/app/core/models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private jsonUrl = 'assets/jsons/collections.json';
  private collectionsSubject = new BehaviorSubject<Collection[]>([]);
  private searchTextSubject = new BehaviorSubject<string>('');
  private pageSize = 7;

  constructor(private http: HttpClient) {
    this.loadCollections();
  }

  private loadCollections() {
    this.http.get<Collection[]>(this.jsonUrl).pipe(
      tap(collections => console.log('Coleções carregadas:', collections))
    ).subscribe({
      next: (collections) => this.collectionsSubject.next(collections),
      error: (error) => console.error('Erro ao buscar coleções:', error)
    });
  }

  setSearchText(searchText: string) {
    this.searchTextSubject.next(searchText);
  }

  getAllCollections(): Observable<Collection[]> {
    return this.collectionsSubject.asObservable();
  }

  getPaginatedCollections(page: number, pageSize: number = this.pageSize): Observable<{
    collection: Collection[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  }> {
    return combineLatest([this.collectionsSubject, this.searchTextSubject]).pipe(
      map(([collections, searchText]) => {
        let filteredCollections = collections;
        if (searchText.trim()) {
          const lowerSearch = searchText.toLowerCase();
          filteredCollections = collections.filter(
            (collection) =>
              collection.name?.toLowerCase().includes(lowerSearch) ||
              collection.description?.toLowerCase().includes(lowerSearch)
          );
        }

        const totalItems = filteredCollections.length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const startIndex = (page - 1) * pageSize;
        const paginatedCollections = filteredCollections.slice(startIndex, startIndex + pageSize);

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