import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RubrosAddModifyComponent } from '../add-modify/add-modify.component';
import { Rubro } from 'src/app/models/rubro';
import { RubrosService } from 'src/app/services';
import { DialogSiNoComponent } from '../../shared';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class RubrosListComponent implements OnInit, AfterViewInit {
	displayedColumns: string[] = ['id', 'nombre', 'acciones'];
	rubros: Rubro[] = [];
	rubro: Rubro;
	dataSource = new MatTableDataSource(this.rubros);
	dialogConfig = new MatDialogConfig();

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	constructor(
		private rubrosService: RubrosService,
		private _snackBar: MatSnackBar,
		public dialog: MatDialog
	) {
		this.rubro = {
			nombrerubro: '',
		};
		this.dialogConfig = {
			maxWidth: '60vw',
			maxHeight: '45vh',
			height: '100%',
			width: '100%',
		};
	}
	ngOnInit(): void {
		this.getRubros();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	getRubros() {
		this.rubrosService.getRubros().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	eliminarRubro(elemento: Rubro) {
		this.dialog
			.open(DialogSiNoComponent, {
				width: '350px',
				data: '¿Está seguro de eliminar el rubro?',
			})
			.afterClosed()
			.subscribe((res) => {
				if (res) {
					this.rubrosService
						.deleteRubro(elemento.idrubros!)
						.subscribe((res) => {
							this._snackBar.open(
								'Rubro eliminado exitosamente',
								'Cerrar',
								{
									horizontalPosition: 'center',
									verticalPosition: 'bottom',
									duration: 3500,
								}
							);
							this.getRubros();
						});
				}
			});
	}

	editarRubro(id: number, elemento: Rubro) {
		this.dialogConfig.data = elemento;
		const dialogRef = this.dialog.open(
			RubrosAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.rubro = result.data;
			this.rubrosService.updateRubro(id, elemento);
		});
	}

	addRubro() {
		this.dialogConfig.data = {};
		const dialogRef = this.dialog.open(
			RubrosAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.getRubros();
		});

		this.getRubros();
	}
}
