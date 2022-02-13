import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: MatTableDataSource<Product> = new MatTableDataSource<Product>();
  constructor(private api: ApiService) {}
  getData(): MatTableDataSource<Product> {
    this.loadData();
    return this.products;
  }
  private loadData() {
    this.api.get("/goods").subscribe((result: any) => this.products.data = result.data);
  }
}
