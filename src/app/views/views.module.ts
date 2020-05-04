import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ColorModule } from './color/color.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    CategoriaModule,
    ColorModule
  ]
})
export class ViewsModule { }
