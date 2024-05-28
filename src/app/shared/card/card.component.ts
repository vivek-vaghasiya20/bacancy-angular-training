import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  public currentRoute!: string;
  public showDeleteButton: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    if (this.currentRoute == '/cart') {
      this.showDeleteButton = true;
    }
  }
}
