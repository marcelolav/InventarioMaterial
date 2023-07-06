import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddModifyComponent } from '../add-modify/add-modify.component';
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
	producto: Producto;
	dataSource = new MatTableDataSource(this.productos);
	dialogConfig = new MatDialogConfig();

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort!: MatSort;

	constructor(
		private productsService: ProductsService,
		private _snackBar: MatSnackBar,
		public dialog: MatDialog
	) {
		this.producto = {
			codigobarra: '',
			nombreproducto: '',
			descripcion: '',
			precio: 0,
			preciocompra: 0,
			existencia: 0,
			preciorefdolar: 0,
			rubroid: 0,
		};
		this.dialogConfig = {
			maxWidth: '60vw',
			maxHeight: '45vh',
			height: '100%',
			width: '100%',
		};
	}
	ngOnInit() {
		this.getproducts();
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
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
			this.productsService
				.deleteProduct(elemento.idproductos!)
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
	editar(id: number, elemento: Producto) {
		this.dialogConfig.data = elemento;
		const dialogRef = this.dialog.open(
			ProductAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			this.producto = result.data;
			this.productsService.updateProduct(id, elemento);
		});
	}

	addProducto() {
		this.dialogConfig.data = {};
		const dialogRef = this.dialog.open(
			ProductAddModifyComponent,
			this.dialogConfig
		);
		dialogRef.afterClosed().subscribe((result) => {
			console.log('Desde listcomponent=>', result);
			this.getproducts();
		});
	}
}
