import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
	selector: 'app-lista-productos',
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

	constructor(
		private productsService: ProductsService,
		private _snackBar: MatSnackBar
	) {}
	ngOnInit() {
		this.getproducts();
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		// this.dataSource.sort = this.sort;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	getproducts() {
		this.productsService.getProducts().subscribe((res) => {
			this.dataSource.data = res;
			this.dataSource.sort = this.sort;
		});
	}
	eliminar(elemento: Producto) {
		if (
			confirm(
				'¿Desea eliminar el Producto ' +
					elemento.nombreproducto +
					'?'
			)
		) {
			console.log(elemento);
			this.productsService
				.deleteProduct(elemento.idproductos)
				.subscribe((res) => {
					this._snackBar.open(
						'Producto eliminado exitosamente',
						'Cerrar',
						{
							horizontalPosition: 'center',
							verticalPosition: 'bottom',
							duration: 3000,
						}
					);
					this.getproducts();
				});
		}
	}
	editar(elemento: any) {
		console.log(elemento);
	}
}
