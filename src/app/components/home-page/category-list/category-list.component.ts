import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: MatTableDataSource<Category> = new MatTableDataSource<Category>();

  constructor(private listService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.listService.getData();
  }
}
