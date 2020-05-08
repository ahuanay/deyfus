import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductoEgresoComponent } from './producto-egreso.component';
import { ListProductoEgresoComponent } from './list-producto-egreso/list-producto-egreso.component';
import { CreateProductoEgresoComponent } from './create-producto-egreso/create-producto-egreso.component';
import { DeleteProductoEgresoComponent } from './delete-producto-egreso/delete-producto-egreso.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    ProductoEgresoComponent,
    ListProductoEgresoComponent,
    CreateProductoEgresoComponent,
    DeleteProductoEgresoComponent,
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
    ProductoEgresoComponent,
    CreateProductoEgresoComponent
  ]
})
export class ProductoEgresoModule { }
