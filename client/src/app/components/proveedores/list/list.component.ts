import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProveedoresAddModifyComponent } from '../add-modify/add-modify.component';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
	selector: 'proveedores-app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ProveedoresListComponent implements OnInit, AfterViewInit {
	proveedores: Proveedor[] = [];
	dataSource = new MatTableDataSource(this.proveedores);
	dialogConfig = new MatDialogConfig();
	proveedor: Proveedor;
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	displayedColumns: string[] = [
		'idproveedores',
		'nombre',
		'referencia',
		'fechaultimacompra',
		'totalcompras',
		'acciones',
	];
	constructor(
		private proveedoresService: ProveedoresService,
		private _snackBar: MatSnackBar,
		public dialog: MatDialog
	) {
		this.proveedor = {
			nombre: '',
			referencia: '',
			fechaultimacompra: new Date(),
			totalcompras: 0,
		};
		this.dialogConfig = {
			maxWidth: '60vw',
			maxHeight: '70vh',
			height: '100%',
			width: '100%',
		};
	}
	ngOnInit(): void {
		this.getProveedores();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	getProveedores() {
		this.proveedoresService.getProveedores().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	editarProveedor(id: number, elemento: Proveedor) {
		const fechacambiada = new Date(elemento.fechaultimacompra);

		elemento.fechaultimacompra = fechacambiada;
		console.log(elemento.fechaultimacompra);

		this.dialogConfig.data = elemento;
		this.dialogConfig.data.fechaultimacompra = fechacambiada;
		const dialogRef = this.dialog.open(
			ProveedoresAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.proveedores = result.data;
			this.proveedoresService.updateProveedor(id, elemento);
		});
	}

	agregarProveedor() {
		this.dialogConfig.data = {};
		const dialogRef = this.dialog.open(
			ProveedoresAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.getProveedores();
		});
	}
	eliminarProveedor(elemento: Proveedor) {
		if (
			confirm('¿Desea eliminar el Proveedor ' + elemento.nombre + '?')
		) {
			this.proveedoresService
				.deleteProveedor(elemento.idproveedores!)
				.subscribe((res) => {
					this._snackBar.open(
						'Proveedor eliminado exitosamente',
						'Cerrar',
						{
							horizontalPosition: 'center',
							verticalPosition: 'bottom',
							duration: 3000,
						}
					);
					this.getProveedores();
				});
		}
	}
}
