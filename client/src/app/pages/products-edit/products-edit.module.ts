import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsEditComponent } from './products-edit.component';
import { ProductsEditRoutingModule } from './products-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProductsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductsEditComponent
  ]
})
export class ProductsEditModule { }
