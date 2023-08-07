import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'product-display-query',
	templateUrl: './display-query.component.html',
	styleUrls: ['./display-query.component.css'],
})
export class ProductDisplayQueryComponent implements OnInit, AfterViewInit {
	productos: Producto[] = [];
	dataSource = new MatTableDataSource(this.productos);
	displayedColumns: string[] = [
		'codigobarra',
		'nombreproducto',
		'descripcion',
		'precio',
		'preciocompra',
		'preciorefdolar',
		'existencia',
		'rubro',
	];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.getproducts();
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	getproducts() {
		this.productsService.getProductList().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
