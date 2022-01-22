import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css'],
})
export class ContentViewComponent implements OnInit {
  constructor() {}
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
  ngOnInit(): void {}
}
