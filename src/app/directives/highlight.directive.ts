import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector : '[app-highlight]'
})

export class HighlightDirective {

    @Input('defaultColor') defaultColor : string;
    @Input("initialColor") initialColor : string;

    @HostBinding('style.background-color') bgcolor : any;

    @HostListener('mouseenter') onmouseenter(){
        // console.log("mouseenter");
        // this.elementRef.nativeElement.style.backgroundColor = "yellow";
        this.bgcolor = this.defaultColor;
    }
    @HostListener('mouseleave') onmouseleave(){
        // console.log("mouseleave");
        // this.elementRef.nativeElement.style.backgroundColor = "transparent"
        this.bgcolor = this.initialColor;
    }

    constructor(private elementRef : ElementRef){
        console.log(this.initialColor); //?
        // console.log(this.elementRef.nativeElement);
    }
}