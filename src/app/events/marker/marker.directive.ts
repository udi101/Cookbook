import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[marker]'
})
export class MarkerDirective implements OnInit {
    el: HTMLElement;
    constructor(private ref: ElementRef) { }

    ngOnInit() {
        this.el = this.ref.nativeElement;
        this.el.addEventListener('click', () => this.el.style.color = 'red');
    }
}
