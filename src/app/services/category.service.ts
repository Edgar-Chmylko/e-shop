import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private categories: MatTableDataSource<Category> = new MatTableDataSource<Category>();

  constructor(private api: ApiService) {}

  getData(): MatTableDataSource<Category> {
    this.loadData();
    return this.categories;
  }

  delete(id: number) {
    this.api.delete("/categories/" + id).subscribe(() => this.loadData());
  }

  private loadData() {
    this.api.get("/categories").subscribe((result: any) => this.categories.data = result.data);
  }
}
