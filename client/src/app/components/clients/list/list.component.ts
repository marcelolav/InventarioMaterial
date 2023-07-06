import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from '../../../services/clientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClientAddModifyComponent } from '../add-modify/add-modify.component';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ClientListComponent implements OnInit, AfterViewInit {
	clientes: Cliente[] = [];
	dataSource = new MatTableDataSource(this.clientes);
	dialogConfig = new MatDialogConfig();
	cliente: Cliente;
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	displayedColumns: string[] = [
		'idclientes',
		'nombrecliente',
		'telefono',
		'direccion',
		'cuit',
		'observaciones',
		'acciones',
	];
	constructor(
		private clientService: ClientesService,
		private _snackBar: MatSnackBar,
		public dialog: MatDialog
	) {
		this.cliente = {
			nombrecliente: '',
			telefono: '',
			direccion: '',
			cuit: '',
			observaciones: '',
		};
		this.dialogConfig = {
			maxWidth: '60vw',
			maxHeight: '70vh',
			height: '100%',
			width: '100%',
		};
	}

	ngOnInit(): void {
		this.getClientes();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	getClientes() {
		this.clientService.getClientes().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	editarcliente(id: number, elemento: Cliente) {
		this.dialogConfig.data = elemento;
		const dialogRef = this.dialog.open(
			ClientAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.cliente = result.data;
			this.clientService.updateCliente(id, elemento);
		});
	}

	agregarcliente() {
		this.dialogConfig.data = {};
		const dialogRef = this.dialog.open(
			ClientAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.getClientes();
		});
	}
	eliminarcliente(elemento: Cliente) {
		if (
			confirm(
				'¿Desea eliminar el Cliente ' + elemento.nombrecliente + '?'
			)
		) {
			this.clientService
				.deleteCliente(elemento.idclientes!)
				.subscribe((res) => {
					this._snackBar.open(
						'Cliente eliminado exitosamente',
						'Cerrar',
						{
							horizontalPosition: 'center',
							verticalPosition: 'bottom',
							duration: 3000,
						}
					);
					this.getClientes();
				});
		}
	}
}
