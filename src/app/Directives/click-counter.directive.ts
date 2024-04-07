import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickCounter]',
})
export class ClickCounterDirective {
  constructor() {}
  private clickCount: number = 0;

  @HostListener('document:click')
  onClick() {
    this.clickCount++;
    this.updateCount();
  }

  private updateCount() {
    const counterElement = document.getElementById('clickCounter');
    if (counterElement) {
      counterElement.innerText = `Task3: Total Clicks: ${this.clickCount}`;
    }
  }
}
