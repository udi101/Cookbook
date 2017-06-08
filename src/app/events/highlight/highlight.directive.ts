import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
    el: HTMLElement;
    constructor(private ref: ElementRef) {
    }
    ngOnInit() {
        this.el = this.ref.nativeElement;
        this.el.addEventListener('dblclick',()=>this.el.style.color = 'red');
    }
}
