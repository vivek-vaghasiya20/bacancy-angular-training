import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss',
})
export class ProductDescriptionComponent {
  @Input({ required: true }) productDescription!: string;
}
