import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloComponent } from './modelo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ListModeloComponent } from './list-modelo/list-modelo.component';
import { CreateModeloComponent } from './create-modelo/create-modelo.component';
import { DeleteModeloComponent } from './delete-modelo/delete-modelo.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    ModeloComponent,
    ListModeloComponent,
    CreateModeloComponent,
    DeleteModeloComponent,
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
    ModeloComponent
  ]
})
export class ModeloModule { }
