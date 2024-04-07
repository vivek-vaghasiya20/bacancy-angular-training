import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCaptilizeOnHover]',
})
export class CaptilizeOnHoverDirective {
  constructor() {}

  @HostBinding('style.text-transform') textTransform: string = '';
  @HostBinding('style.background-color') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.textTransform = 'uppercase';
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textTransform = '';
    this.backgroundColor = '';
  }
}
