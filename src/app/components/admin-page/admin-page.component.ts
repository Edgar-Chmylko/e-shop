import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', `actions`];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>();

  constructor(private listService: CategoryService) {}

  ngOnInit(): void {
    this.dataSource = this.listService.getData();
  }

}