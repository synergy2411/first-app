import { LAZY_ROUTES } from './lazy.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { Lazy1Component } from './lazy1/lazy1.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],

  declarations: [LazyComponent, Lazy1Component]
})
export class LazyModule { }
