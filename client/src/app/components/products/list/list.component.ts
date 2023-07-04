import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
	displayedColumns: string[] = [
		'idproductos',
		'codigobarra',
		'nombreproducto',
		'descripcion',
		'precio',
		'existencia',
		'acciones',
	];
	productos: Producto[] = [];
	dataSource = new MatTableDataSource(this.productos);
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	constructor(private productsService: ProductsService) {}
	ngOnInit() {
		this.productsService.getProducts().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		// this.dataSource.sort = this.sort;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	editar(elemento: any) {
		console.log(elemento);
	}
	eliminar(elemento: any) {
		console.log(elemento);
	}
}
