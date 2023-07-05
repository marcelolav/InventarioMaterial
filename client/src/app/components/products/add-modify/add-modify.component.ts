import { Component, Inject } from '@angular/core';
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
import { Producto } from 'src/app/models/producto';

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
	],
})
export class ProductAddModifyComponent {
	constructor(
		public dialogRef: MatDialogRef<ProductAddModifyComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Producto
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	guardarDatos(producto: Producto) {
		console.log('Guardar datos', producto);
	}
}
