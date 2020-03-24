import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormSelectBoxComponent } from './form-select-box/form-select-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,NgScrollbarModule
  ],
  declarations: [ FormSelectBoxComponent],
  exports: [ FormSelectBoxComponent]
})
export class ElementModule { }
