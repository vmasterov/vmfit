import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

    constructor(private element: ElementRef) {
    }

    @Output()
    public appClickOutside = new EventEmitter();

    @HostListener('document: click', ['$event.target'])
    public onClick(target) {
        const isClickInside = this.element.nativeElement.contains(target.parentElement);

        if (!isClickInside) {
            this.appClickOutside.emit(target);
        }
    }
}
