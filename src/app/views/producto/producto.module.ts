import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductoComponent } from './producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { DeleteProductoComponent } from './delete-producto/delete-producto.component';
import { FilterPipe } from './filter/filter.pipe';
import { ProductoEgresoModule } from '../producto-egreso/producto-egreso.module';

@NgModule({
  declarations: [
    ProductoComponent,
    ListProductoComponent,
    CreateProductoComponent,
    DeleteProductoComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ProductoEgresoModule,
    NgxSpinnerModule
  ],
  exports: [
    ProductoComponent
  ]
})
export class ProductoModule { }
