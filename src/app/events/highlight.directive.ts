import { Directive, ElementRef } from '@angular/core';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(private elementRef: ElementRef) {
        const ne = this.elementRef.nativeElement();
    }
}


// import { Directive } from '@angular/core';

// @Directive({ selector: '[selector-name]' })
// export class NameDirective {
//     constructor() { }
// }