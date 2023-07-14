import { 
  Component , 
  Input, 
  ViewEncapsulation,
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None, Emulated,ShadowDom
})

export class ServerElementComponent implements 
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element:{type:string, name:string,content:string} ={type:"",name:"",content:""}

  @Input() name:string = '';
  @ViewChild('HEADING') heading:ElementRef; 
  @ContentChild('paragraphContent') paragraphContent:ElementRef;

  constructor() {
      console.log("Constructore Called !");
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log("Text Content",this.heading.nativeElement.textContent);
    console.log("ngOnChanges called !");
    console.log(changes);
  }

  ngOnInit(){  
    console.log("ngOnInit Called");
  }

  ngDoCheck(){
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit Called");
    console.log("paragraphContent",this.paragraphContent.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked Called");
  }

 ngAfterViewInit(){
  console.log("Text Content",this.heading.nativeElement.textContent);
  console.log("ngAfterContentChecked Called");
  
 }

 ngAfterViewChecked(){
  console.log("ngAfterViewChecked Called");
 }

 ngOnDestroy(){
  console.log("ngOnDestroy Called");
 }
 
}
