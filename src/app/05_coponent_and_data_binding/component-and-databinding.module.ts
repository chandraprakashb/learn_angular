import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { App05Component } from "./app05/app05.component";
import { FormsModule } from "@angular/forms";
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { GameControleComponent } from "./assignment/game-controle/game-controle.component";
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';


@NgModule({
    declarations:[
    App05Component,
    CockpitComponent,
    ServerElementComponent,
    AssignmentComponent,
    GameControleComponent,
    OddComponent,
    EvenComponent
  ],
    imports:[CommonModule,FormsModule],
    exports:[App05Component,AssignmentComponent]
})

export class ComponentAndDataBinding{}