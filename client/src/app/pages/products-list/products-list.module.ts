import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductsListComponent
  ]
})
export class ProductsListModule { }
