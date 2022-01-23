import { ContentViewModalComponent } from './../content-view-modal/content-view-modal.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css'],
})
export class ContentViewComponent {
  constructor(public modal: MatDialog) {}
  productName = 'Product Name';
  productImage = '/assets/logo.png';
  productPrice = '4.20$';
  productList = [
    {
      productName: this.productName,
      productPrice: this.productPrice,
      productImage: this.productImage,
    },
    {
      productName: this.productName,
      productPrice: this.productPrice,
      productImage: this.productImage,
    },
    {
      productName: this.productName,
      productPrice: this.productPrice,
      productImage: this.productImage,
    },
  ];
  openModal() {
    this.modal.open(ContentViewModalComponent, {
      height: '76%',
      width: '100%',
    });
  }
}
