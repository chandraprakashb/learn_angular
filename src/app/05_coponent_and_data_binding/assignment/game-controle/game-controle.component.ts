
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:"app-game-controle",
    templateUrl:'./game-controle.component.html'
})

export class GameControleComponent{
    intervalId:any;
    
   @Output() strtInterval = new EventEmitter<boolean>();
   
   eventStart(){
    this.intervalId = setInterval(()=>{
        this.strtInterval.emit(true);
    },1000)
   }

   eventStop(){
    clearInterval(this.intervalId)
   }

}