import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', `actions`];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>();
  productSource: MatTableDataSource<Product> =
    new MatTableDataSource<Product>();

  constructor(
    private listService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.dataSource = this.listService.getData();
    this.productSource = this.productService.getData();
  }

  deleteCategory(id: number) {
    this.listService.delete(id);
  }
}
