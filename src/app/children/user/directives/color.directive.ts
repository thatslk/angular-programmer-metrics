import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appColor]',
})
export class ColorDirective implements OnInit {
    @Input('appColor') color: string | undefined;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        if (!this.color) {
            this.color = 'var(--material-theme--sys--primary)';
        }
        this.el.nativeElement.style.color = this.color;
    }
}
