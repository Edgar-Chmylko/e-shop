import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title'];
  dataSource: Category[] = [];

  constructor(private listService: CategoryService) {}

  ngOnInit(): void {
    this.listService.getData().subscribe((result) => {
      this.dataSource = result;
    });
  }
}
