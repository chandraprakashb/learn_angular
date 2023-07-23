import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = "green";
  @Input() highlightedColor:string; 
  @HostBinding('style.backgroundColor') backgroundColor:string; 
  constructor(private elementRef:ElementRef,private renderer:Renderer2) {}

  ngOnInit(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color","blue"      
    // )
    this.backgroundColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseEvent(eventData:Event){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color","blue"      
    // )
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightedColor;
    
  }

  
  @HostListener('mouseleave') mouseLeave(eventData:Event){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color","transparent"      
    // )
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }




}
