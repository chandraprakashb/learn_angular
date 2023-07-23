import { 
  Directive, 
  ElementRef, 
  Input, 
  ViewContainerRef 
} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
@Input('appUnless') set unless(conditon:boolean){
  if(!conditon) this.viewRef.createEmbeddedView(this.elementRef.nativeElement)
  else this.viewRef.clear() 
}
  constructor(
    private elementRef:ElementRef, 
    private viewRef:ViewContainerRef
  ){
    
  }
}
