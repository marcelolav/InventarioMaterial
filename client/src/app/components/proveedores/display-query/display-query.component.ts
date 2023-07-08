import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
	selector: 'app-display-query',
	templateUrl: './display-query.component.html',
	styleUrls: ['./display-query.component.css'],
})
export class ProveedoresDisplayQueryComponent implements OnInit, AfterViewInit {
	proveedores: Proveedor[] = [];
	dataSource = new MatTableDataSource(this.proveedores);
	displayedColumns: string[] = [
		'idproveedores',
		'nombre',
		'referencia',
		'fechaultimacompra',
		'totalcompras',
	];
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;
	constructor(private provserv: ProveedoresService) {}
	ngOnInit(): void {
		this.getProveedores();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}
	getProveedores() {
		this.provserv.getProveedores().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
			console.log(this.dataSource.data);
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
