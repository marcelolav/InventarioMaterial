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
import { CommonModule } from '@angular/common';
import { Cliente } from 'src/app/models/cliente';
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
		@Inject(MAT_DIALOG_DATA) public data: Cliente
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
