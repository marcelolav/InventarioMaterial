import { Component, Inject, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import {
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';
import { Rubro } from 'src/app/models/rubro';
import { RubrosService } from 'src/app/services/rubros.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'dialogo-productos',
	templateUrl: 'add-modify.component.html',
	standalone: true,
	imports: [
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatGridListModule,
		MatSelectModule,
		CommonModule,
	],
})
export class ProductAddModifyComponent implements OnInit {
	listaRubros: Rubro[] = [];

	constructor(
		public dialogRef: MatDialogRef<ProductAddModifyComponent>,
		public prodserv: ProductsService,
		public rubserv: RubrosService,
		@Inject(MAT_DIALOG_DATA) public data: Producto
	) {}
	ngOnInit() {
		this.rubserv.getRubros().subscribe((rubros) => {
			this.listaRubros = rubros;
			console.log(this.listaRubros);
		});
	}

	onNoClick(): void {
		this.dialogRef.close();
	}

	guardarDatos(producto: Producto) {
		console.log('Producto a guardar=>', producto);
		if (producto.idproductos !== undefined) {
			console.log('es modificacion');
			this.prodserv
				.updateProduct(producto.idproductos, producto)
				.subscribe((res) => {
					console.log(res);
				});
		} else {
			console.log('Es alta!!!');
			this.prodserv.addProduct(producto).subscribe((res) => {
				console.log(res);
			});
		}
	}
}
