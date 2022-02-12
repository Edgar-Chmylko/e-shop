import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-view-modal',
  templateUrl: './content-view-modal.component.html',
  styleUrls: ['./content-view-modal.component.css'],
})
export class ContentViewModalComponent implements OnInit {
  constructor() {}
  productName = 'Product Name';
  productImage = '/assets/logo.png';
  productPrice = '4.20$';
  productDescription =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem natus eos, fugiat, magnam animi sunt eaque, voluptatibus cupiditate dignissimos earum. Ducimus, voluptas quos? Totam explicabo sit esse impedit odio amet aut ullam ducimus. Culpa.';
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
