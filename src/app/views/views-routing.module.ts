import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ColorComponent } from './color/color.component';
import { TiendaComponent } from './tienda/tienda.component';
import { TipoCueroComponent } from './tipo-cuero/tipo-cuero.component';
import { ModeloComponent } from './modelo/modelo.component';
import { ProductoIngresoComponent } from './producto-ingreso/producto-ingreso.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoEgresoComponent } from './producto-egreso/producto-egreso.component';

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
    },
    {
        path: 'modelos',
        component: ModeloComponent
    },
    {
        path: 'productos',
        component: ProductoComponent
    },
    {
        path: 'productos-ingreso',
        component: ProductoIngresoComponent
    },
    {
        path: 'productos-egreso',
        component: ProductoEgresoComponent
    },
    {
        path: 'alertas',
    },
    {
        path: 'perfil',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }