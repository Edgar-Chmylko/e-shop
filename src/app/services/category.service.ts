import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private data: Category[] = [];

  constructor(private api: ApiService) {}

  getData(): Observable<Category[]> {
    this.loadData();
    return of(this.data);
  }

  private loadData() {
    this.api.get("/categories").subscribe((result: any) => this.data.push(...result.data));
  }
}
