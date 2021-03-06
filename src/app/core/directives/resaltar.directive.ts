import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  cambiarColor() {
    this.aplicarColor('red');
  }
  @HostListener('mouseleave')
  limpiarColor() {
    this.aplicarColor(null);
  }

  aplicarColor(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
  }

}
