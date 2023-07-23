import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComprasCabecera, ComprasDetalle } from '../models/compras';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class ComprasService {
	private APIURL: string = 'http://localhost:3000/compras';

	constructor(private http: HttpClient) {}

	getCabeceras(): Observable<ComprasCabecera[]> {
		return this.http.get<ComprasCabecera[]>(this.APIURL + 'cabecera');
	}

	getDetalles(comp: number) {
		return this.http.get<ComprasDetalle[]>(
			this.APIURL + '/detalle/' + comp
		);
	}
}
