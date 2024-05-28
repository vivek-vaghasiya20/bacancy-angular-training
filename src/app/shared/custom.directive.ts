import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setHoverEffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHoverEffect(false);
  }

  private setHoverEffect(isHovered: boolean) {
    if (isHovered) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.9)');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
    }
  }
}
