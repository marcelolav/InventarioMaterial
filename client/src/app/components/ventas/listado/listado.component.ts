import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VentasListadoTotal } from '../../../models';
import { VentasService } from 'src/app/services/ventas.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogoDetalleComprobante } from './dialogoDetalle.component';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css'],
})
export class ListadoVentasComponent implements OnInit, AfterViewInit {
	ventas: VentasListadoTotal[] = [];
	dataSource = new MatTableDataSource(this.ventas);
	displayedColumns: string[] = [
		'fecha',
		'comprobante_cabecera',
		'nombrecliente',
		'totalventa',
		'detalles',
	];
	dialogConfig = new MatDialogConfig();
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	constructor(private ventasServ: VentasService, private dialog: MatDialog) {
		this.dialogConfig = {
			maxWidth: '60vw',
			maxHeight: '70vh',
			height: '100%',
			width: '100%',
		};
	}

	ngOnInit(): void {
		this.getVentas();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	getVentas() {
		this.ventasServ.getVentasTotal().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	verDetalle(comprobante: number) {
		this.ventasServ
			.getDetalleComprobante(comprobante)
			.subscribe((res) => {
				this.dialogConfig.data = res;
				const dialogRef = this.dialog.open(
					DialogoDetalleComprobante,
					this.dialogConfig
				);
			});
	}
}
