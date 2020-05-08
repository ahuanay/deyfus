import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TiendaComponent } from './tienda.component';
import { ListTiendaComponent } from './list-tienda/list-tienda.component';
import { CreateTiendaComponent } from './create-tienda/create-tienda.component';
import { DeleteTiendaComponent } from './delete-tienda/delete-tienda.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    TiendaComponent,
    ListTiendaComponent,
    CreateTiendaComponent,
    DeleteTiendaComponent,
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
    TiendaComponent
  ]
})
export class TiendaModule { }
