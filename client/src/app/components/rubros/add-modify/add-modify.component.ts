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
import { Rubro } from 'src/app/models/rubro';
import { RubrosService } from 'src/app/services/rubros.service';
import { CommonModule } from '@angular/common';

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
export class RubrosAddModifyComponent implements OnInit {
	listaRubros: Rubro[] = [];

	constructor(
		public dialogRef: MatDialogRef<RubrosAddModifyComponent>,
		public rubserv: RubrosService,
		@Inject(MAT_DIALOG_DATA) public data: Rubro
	) {}

	ngOnInit(): void {
		this.rubserv.getRubros().subscribe((rubros) => {
			this.listaRubros = rubros;
			console.log(this.listaRubros);
		});
	}
	onNoClick(): void {
		this.dialogRef.close();
	}

	guardarDatos(rubro: Rubro) {
		if (rubro.idrubros !== undefined) {
			this.rubserv
				.updateRubro(rubro.idrubros, rubro)
				.subscribe((res) => {
					console.log(res);
				});
		} else {
			this.rubserv.addRubro(rubro).subscribe((res) => {
				console.log(res);
			});
		}
	}
}
