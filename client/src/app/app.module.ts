// Componentes de Angular
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
// Componentes generados
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/products/list/list.component';
import { ProductDisplayQueryComponent } from './components/products/display-query/display-query.component';
import { ClientListComponent } from './components/clients/list/list.component';
import { ClientDisplayQueryComponent } from './components/clients/display-query/display-query.component';
import { RubrosAddModifyComponent } from './components/rubros/add-modify/add-modify.component';
import { RubrosDisplayQueryComponent } from './components/rubros/display-query/display-query.component';
import { RubrosListComponent } from './components/rubros/list/list.component';
import { ProveedoresDisplayQueryComponent } from './components/proveedores/display-query/display-query.component';
import { ProveedoresListComponent } from './components/proveedores/list/list.component';
import { DialogSiNoComponent } from './components/shared/dialog-si-no.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HomeComponent,
		ErrorComponent,
		ProductListComponent,
		ProductDisplayQueryComponent,
		ClientListComponent,
		ClientDisplayQueryComponent,
		RubrosAddModifyComponent,
		RubrosDisplayQueryComponent,
		RubrosListComponent,
		ProveedoresDisplayQueryComponent,
		ProveedoresListComponent,
		DialogSiNoComponent,
	],
	imports: [
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatGridListModule,
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		MatPaginatorModule,
		MatSortModule,
		MatSnackBarModule,
		MatDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
