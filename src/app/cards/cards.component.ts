import { Component } from '@angular/core';
import { card } from '../interface/interface';
import { HIDE, SHOW } from '../const/const';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  public const: { hide: string; show: string } = { hide: HIDE, show: SHOW };
  public cards: card[] = [
    {
      title: 'Card Title 1',
      description: 'Description of Card 1',
      imageUrl: 'assets/card-image.jpg',
      visible: true,
    },
    {
      title: 'Card Title 2',
      description: 'Description of Card 2',
      imageUrl: 'assets/card-image.jpg',
      visible: true,
    },
    {
      title: 'Card Title 3',
      description: 'Description of Card 3',
      imageUrl: 'assets/card-image.jpg',
      visible: true,
    },
    {
      title: 'Card Title 4',
      description: 'Description of Card 4',
      imageUrl: 'assets/card-image.jpg',
      visible: true,
    },
  ];

  public updateInfo(card: card): void {
    card.visible = !card.visible;
  }
}
