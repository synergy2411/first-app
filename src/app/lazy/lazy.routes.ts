import { LazyComponent } from './lazy/lazy.component';
import { Routes } from '@angular/router';
import { Lazy1Component } from './lazy1/lazy1.component';

export const LAZY_ROUTES : Routes = [{
    path : '',
    component : LazyComponent,
}, {
    path : 'lazy1',
    component : Lazy1Component
}]