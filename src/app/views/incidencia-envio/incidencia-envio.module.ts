import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenciaEnvioComponent } from './incidencia-envio.component';
import { ListIncidenciaEnvioComponent } from './list-incidencia-envio/list-incidencia-envio.component';
import { CreateIncidenciaEnvioComponent } from './create-incidencia-envio/create-incidencia-envio.component';
import { DeleteIncidenciaEnvioComponent } from './delete-incidencia-envio/delete-incidencia-envio.component';



@NgModule({
  declarations: [
    IncidenciaEnvioComponent,
    ListIncidenciaEnvioComponent,
    CreateIncidenciaEnvioComponent,
    DeleteIncidenciaEnvioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncidenciaEnvioComponent
  ]
})
export class IncidenciaEnvioModule { }
