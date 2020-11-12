import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudCompletadoComponent } from './solicitud-completado.component';
import { ListSolicitudCompletadoComponent } from './list-solicitud-completado/list-solicitud-completado.component';
import { CreateSolicitudCompletadoComponent } from './create-solicitud-completado/create-solicitud-completado.component';
import { DeleteSolicitudCompletadoComponent } from './delete-solicitud-completado/delete-solicitud-completado.component';



@NgModule({
  declarations: [
    SolicitudCompletadoComponent,
    ListSolicitudCompletadoComponent,
    CreateSolicitudCompletadoComponent,
    DeleteSolicitudCompletadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SolicitudCompletadoComponent
  ]
})
export class SolicitudCompletadoModule { }
