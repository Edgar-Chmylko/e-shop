import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'actions'];
  dataSource: Category[] = [];


  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getData().subscribe((result) => {
      this.dataSource = result;
    });
  }

}
