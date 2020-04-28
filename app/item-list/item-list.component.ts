import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  products = products;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

goBack(): void {
  history.go(-1);
}
}