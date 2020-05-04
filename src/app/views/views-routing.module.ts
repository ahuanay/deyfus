import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ColorComponent } from './color/color.component';
import { TiendaComponent } from './tienda/tienda.component';
import { TipoCueroComponent } from './tipo-cuero/tipo-cuero.component';

const routes: Routes = [
    {
        path: 'categorias',
        component: CategoriaComponent
    },
    {
        path: 'colores',
        component: ColorComponent
    },
    {
        path: 'tiendas',
        component: TiendaComponent
    },
    {
        path: 'tipos-cuero',
        component: TipoCueroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }