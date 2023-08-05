import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
	providedIn: 'root',
})
export class ProveedoresService {
	private APIURL: string = 'http://localhost:3000/proveedores';
	constructor(private http: HttpClient) {}

	getProveedores(): Observable<Proveedor[]> {
		return this.http.get<Proveedor[]>(this.APIURL);
	}

	getProveedor(id: number): Observable<Proveedor> {
		return this.http.get<Proveedor>(this.APIURL + '/' + id);
	}
	deleteProveedor(id: number): Observable<any> {
		return this.http.delete(this.APIURL + '/' + id);
	}

	updateProveedor(id: number, updatedProveedor: Proveedor): Observable<any> {
		return this.http.put(`${this.APIURL}/${id}`, updatedProveedor);
	}

	addProveedor(proveedor: Proveedor): Observable<any> {
		return this.http.post(`${this.APIURL}/`, proveedor);
	}
}
