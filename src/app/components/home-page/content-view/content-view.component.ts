import { ContentViewModalComponent } from './../content-view-modal/content-view-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css'],
})
export class ContentViewComponent implements OnInit {
  constructor(
    public modal: MatDialog,
    private productService: ProductService
  ) {}
  products: MatTableDataSource<Product> = new MatTableDataSource<Product>();

  ngOnInit(): void {
    this.products = this.productService.getData();
  }

  openModal(product: Product) {
    this.modal.open(ContentViewModalComponent, {
      height: '76%',
      width: '100%',
      data: product,
    });
  }
}
