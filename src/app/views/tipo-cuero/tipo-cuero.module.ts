import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipoCueroComponent } from './tipo-cuero.component';
import { ListTipoCueroComponent } from './list-tipo-cuero/list-tipo-cuero.component';
import { CreateTipoCueroComponent } from './create-tipo-cuero/create-tipo-cuero.component';
import { DeleteTipoCueroComponent } from './delete-tipo-cuero/delete-tipo-cuero.component';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [
    TipoCueroComponent,
    ListTipoCueroComponent,
    CreateTipoCueroComponent,
    DeleteTipoCueroComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    TipoCueroComponent
  ]
})
export class TipoCueroModule { }
