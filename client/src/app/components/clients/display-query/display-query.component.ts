import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
	selector: 'clientes-display-query',
	templateUrl: './display-query.component.html',
	styleUrls: ['./display-query.component.css'],
})
export class ClientDisplayQueryComponent implements OnInit, AfterViewInit {
	clientes: Cliente[] = [];
	dataSource = new MatTableDataSource(this.clientes);
	displayedColumns: string[] = [
		'idclientes',
		'nombrecliente',
		'telefono',
		'direccion',
		'cuit',
		'observaciones',
	];
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	constructor(private clientService: ClientesService) {}

	ngOnInit(): void {
		this.getclients();
	}
	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	getclients() {
		this.clientService.getClientes().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
