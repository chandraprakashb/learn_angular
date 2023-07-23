import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App07Component } from './app07/app07.component';
import { AppbasicHilightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';


@NgModule({
  declarations: [
    App07Component,
    AppbasicHilightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[App07Component]
})

export class DirectiveDeepDiveModule { }
