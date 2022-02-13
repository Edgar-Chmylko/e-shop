import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content-view-modal',
  templateUrl: './content-view-modal.component.html',
  styleUrls: ['./content-view-modal.component.css'],
})
export class ContentViewModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {}

  ngOnInit(): void {}
}
