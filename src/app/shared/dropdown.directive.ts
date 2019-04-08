import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  flag: boolean = false;

  constructor(private render: Renderer2, private el: ElementRef ) {}

  @HostListener('click') mouseClick() {
    if (this.flag === true) {
      this.render.addClass(this.el.nativeElement, 'open');
      this.flag = false;
    } else {
      this.render.removeClass(this.el.nativeElement, 'open');
      this.flag = true;
    }

  }
}
