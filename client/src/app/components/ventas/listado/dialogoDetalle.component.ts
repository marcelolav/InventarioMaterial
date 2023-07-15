import {
	Component,
	Inject,
	AfterViewInit,
	ChangeDetectorRef,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatDialogModule,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { CommonModule } from '@angular/common';
import { VentasService } from 'src/app/services/ventas.service';
import { VentasDetalleComprobante, VentasListadoTotal } from 'src/app/models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-add-modify',
	templateUrl: './dialogoDetalle.component.html',
	styleUrls: ['./dialogoDetalle.component.css'],
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
		MatTableModule,
	],
})
export class DialogoDetalleComprobante implements AfterViewInit {
	dataSource = new MatTableDataSource();
	displayedColumns: string[] = [
		'idproducto',
		'nombreproducto',
		'cantidadproducto',
		'importe',
		'subtotal',
	];
	constructor(
		public dialogRef: MatDialogRef<DialogoDetalleComprobante>,
		@Inject(MAT_DIALOG_DATA) public data: [],
		private cdref: ChangeDetectorRef
	) {}
	onNoClick(): void {
		this.dialogRef.close();
	}

	ngAfterViewInit() {
		this.dataSource.data = this.data;
		this.cdref.detectChanges();
	}
}
