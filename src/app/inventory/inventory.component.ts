import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { theCart } from '../theCart';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  myCart: theCart[] = [
    {
      id: 'idnm3',
      product: 'Jeans',
      price: 75,
      quantity: 2,
    },
    {
      id: 'idnm4',
      product: 'Dress Shirt',
      price: 30,
      quantity: 1,
    },
    {
      id: 'idnm5',
      product: 'Shoes',
      price: 50,
      quantity: 1,
    },
    {
      id: 'idnm6',
      product: 'Sweater',
      price: 45,
      quantity: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
