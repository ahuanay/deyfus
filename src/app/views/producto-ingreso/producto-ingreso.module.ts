import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductoIngresoComponent } from './producto-ingreso.component';
import { ListProductoIngresoComponent } from './list-producto-ingreso/list-producto-ingreso.component';
import { CreateProductoIngresoComponent } from './create-producto-ingreso/create-producto-ingreso.component';
import { DeleteProductoIngresoComponent } from './delete-producto-ingreso/delete-producto-ingreso.component';
import { FilterPipe } from './filter/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductoIngresoComponent,
    ListProductoIngresoComponent,
    CreateProductoIngresoComponent,
    DeleteProductoIngresoComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  exports: [
    ProductoIngresoComponent
  ]
})
export class ProductoIngresoModule { }
