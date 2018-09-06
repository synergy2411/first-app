import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { OlEmployeeComponent } from './ol-employee/ol-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
    imports : [ CommonModule ],
    declarations :  [EmployeeComponent, OlEmployeeComponent, NewEmployeeComponent],
    exports :   [EmployeeComponent]
})
export class EmployeeModule{}