import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private APIURL: string = 'http://localhost:3000/productos';

	constructor(private http: HttpClient) {}

	getProducts(): Observable<Producto[]> {
		return this.http.get<Producto[]>(this.APIURL);
	}

	getProduct(id: number): Observable<Producto> {
		return this.http.get<Producto>(this.APIURL + '/' + id);
	}

	deleteProduct(idproductos: number): Observable<any> {
		return this.http.delete(this.APIURL + '/' + idproductos);
	}

	updateProduct(id: number, updatedProducto: Producto): Observable<any> {
		console.log(
			'update por put de: ' + id + ' producto: ' + updatedProducto
		);
		return this.http.put(`${this.APIURL}/${id}`, updatedProducto);
	}

	addProduct(producto: Producto): Observable<any> {
		return this.http.post(`${this.APIURL}/`, producto);
	}
}
