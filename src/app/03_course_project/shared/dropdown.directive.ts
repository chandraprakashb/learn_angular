import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:"[app-dropdown]",
})

export class DropdownDirective implements OnInit{

    constructor(public elementRef:ElementRef,renderer:Renderer2) {}

    @HostListener('click') click(){        
        this.elementRef.nativeElement.nextElementSibling.classList.add('show')
    }

    @HostListener('blur') mouseLeave (){
        this.elementRef.nativeElement.nextElementSibling.classList.remove('show')
    } 

    ngOnInit(){ console.log(this.elementRef.nativeElement.nextElementSibling)}
}