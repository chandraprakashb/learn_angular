import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { App05Component } from "./app05/app05.component";
import { FormsModule } from "@angular/forms";
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';


@NgModule({
    declarations:[
    App05Component,
    CockpitComponent,
    ServerElementComponent
  ],
    imports:[CommonModule,FormsModule],
    exports:[App05Component]
})

export class ComponentAndDataBinding{}