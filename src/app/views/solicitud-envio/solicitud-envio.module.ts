import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SolicitudEnvioComponent } from './solicitud-envio.component';
import { ListSolicitudEnvioComponent } from './list-solicitud-envio/list-solicitud-envio.component';
import { CreateSolicitudEnvioComponent } from './create-solicitud-envio/create-solicitud-envio.component';
import { DeleteSolicitudEnvioComponent } from './delete-solicitud-envio/delete-solicitud-envio.component';
import { ViewSolicitudEnvioComponent } from './view-solicitud-envio/view-solicitud-envio.component';

@NgModule({
  declarations: [
    SolicitudEnvioComponent,
    ListSolicitudEnvioComponent,
    CreateSolicitudEnvioComponent,
    DeleteSolicitudEnvioComponent,
    ViewSolicitudEnvioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  exports: [
    SolicitudEnvioComponent,
    CreateSolicitudEnvioComponent
  ]
})
export class SolicitudEnvioModule { }
