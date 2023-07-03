import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css'],
})
export class ProductListComponent implements OnInit {
	displayedColumns: string[] = [
		'idproductos',
		'codigobarra',
		'nombreproducto',
		'descripcion',
		'precio',
		'existencia',
	];
	productos: Producto[] = [];
	dataSource = new MatTableDataSource();

	constructor(private productsService: ProductsService) {}
	ngOnInit() {
		this.productsService.getProducts().subscribe((res) => {
			this.productos = res;
			this.dataSource.data = this.productos;
			console.log('ngoninit =>', this.productos);
		});
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
