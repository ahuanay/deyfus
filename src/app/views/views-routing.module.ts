import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
    {
        path: 'categorias',
        component: CategoriaComponent
    },
    {
        path: 'colores',
        component: ColorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }