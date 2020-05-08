import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ColorComponent } from './color.component';
import { ListColorComponent } from './list-color/list-color.component';
import { CreateColorComponent } from './create-color/create-color.component';
import { DeleteColorComponent } from './delete-color/delete-color.component';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    ColorComponent,
    ListColorComponent,
    CreateColorComponent,
    DeleteColorComponent,
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
    ColorComponent
  ]
})
export class ColorModule { }
