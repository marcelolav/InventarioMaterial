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
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
@Component({
	selector: 'dialogo-clientes',
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
export class ClientAddModifyComponent {
	constructor(
		public dialogRef: MatDialogRef<ClientAddModifyComponent>,
		public cliserv: ClientesService,
		@Inject(MAT_DIALOG_DATA) public data: Cliente
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
	guardarDatos(cliente: Cliente) {
		if (cliente.idclientes !== undefined) {
			this.cliserv
				.updateCliente(cliente.idclientes, cliente)
				.subscribe((res) => {});
		} else {
			this.cliserv.addCliente(cliente).subscribe((res) => {});
		}
	}
}
