import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/products/list/list.component';
import { ProductAddModifyComponent } from './components/products/add-modify/add-modify.component';
import { ProductDisplayQueryComponent } from './components/products/display-query/display-query.component';
import { ClientListComponent } from './components/clients/list/list.component';
import { ClientAddModifyComponent } from './components/clients/add-modify/add-modify.component';
import { ClientDisplayQueryComponent } from './components/clients/display-query/display-query.component';
import { RubrosListComponent } from './components/rubros/list/list.component';
import { RubrosDisplayQueryComponent } from './components/rubros/display-query/display-query.component';
import { RubrosAddModifyComponent } from './components/rubros/add-modify/add-modify.component';
import { ProveedoresListComponent } from './components/proveedores/list/list.component';
import { ProveedoresDisplayQueryComponent } from './components/proveedores/display-query/display-query.component';
import { ProveedoresAddModifyComponent } from './components/proveedores/add-modify/add-modify.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'productlist', component: ProductListComponent },
	{ path: 'productquery', component: ProductDisplayQueryComponent },
	{ path: 'productos/editar/:id', component: ProductAddModifyComponent },
	{ path: 'clienteslist', component: ClientListComponent },
	{ path: 'clientesquery', component: ClientDisplayQueryComponent },
	{ path: 'clientes/editar/:id', component: ClientAddModifyComponent },
	{ path: 'rubroslist', component: RubrosListComponent },
	{ path: 'rubrosquery', component: RubrosDisplayQueryComponent },
	{ path: 'rubros/editar/:id', component: RubrosAddModifyComponent },
	{ path: 'proveedoreslist', component: ProveedoresListComponent },
	{ path: 'proveedoresquery', component: ProveedoresDisplayQueryComponent },
	{
		path: 'proveedores/editar/:id',
		component: ProveedoresAddModifyComponent,
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
