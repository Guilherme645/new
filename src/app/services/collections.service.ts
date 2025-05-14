import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.jsonUrl);
  }
}
