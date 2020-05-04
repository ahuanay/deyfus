import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { CategoriaComponent } from './categoria.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    CategoriaComponent,
    ListCategoriaComponent,
    CreateCategoriaComponent,
    DeleteCategoriaComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TagInputModule
  ],
  exports: [
    CategoriaComponent
  ]
})
export class CategoriaModule { }
