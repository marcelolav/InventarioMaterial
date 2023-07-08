import { Component, Inject } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
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
import { CommonModule } from '@angular/common';
import { ProveedoresService } from 'src/app/services/proveedores.service';
@Component({
	selector: 'app-add-modify',
	templateUrl: './add-modify.component.html',
	styleUrls: ['./add-modify.component.css'],
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
export class ProveedoresAddModifyComponent {
	constructor(
		public dialogRef: MatDialogRef<ProveedoresAddModifyComponent>,
		public provserv: ProveedoresService,
		@Inject(MAT_DIALOG_DATA) public data: Proveedor
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
	guardarDatos(proveedor: Proveedor) {
		if (proveedor.idproveedores !== undefined) {
			this.provserv
				.updateProveedor(proveedor.idproveedores, proveedor)
				.subscribe((res) => {
					console.log(res);
				});
		} else {
			this.provserv.addProveedor(proveedor).subscribe((res) => {
				console.log(res);
			});
		}
	}
}
