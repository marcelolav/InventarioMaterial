import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/products/list/list.component';
import { ProductAddModifyComponent } from './components/products/add-modify/add-modify.component';
import { ProductDisplayQueryComponent } from './components/products/display-query/display-query.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'productlist', component: ProductListComponent },
	{ path: 'productquery', component: ProductDisplayQueryComponent },
	{ path: 'productos/editar/:id', component: ProductAddModifyComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
