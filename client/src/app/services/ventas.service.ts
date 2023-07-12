import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentasDetalleComprobante, VentasListadoTotal } from '../models';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class VentasService {
	private APIURL: string = 'http://localhost:3000/ventas';

	constructor(private http: HttpClient) {}

	getVentasTotal(): Observable<VentasListadoTotal[]> {
		return this.http.get<VentasListadoTotal[]>(this.APIURL + '/cab');
	}

	getDetalleComprobante(comp: number) {
		return this.http.get<VentasDetalleComprobante[]>(
			this.APIURL + '/detcomp/' + comp
		);
	}
}
