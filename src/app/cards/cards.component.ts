import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  cards: any[] = [
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

  updateInfo(card: any) {
    card.visible = !card.visible;
  }
}
