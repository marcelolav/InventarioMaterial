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
}
