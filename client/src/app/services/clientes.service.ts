import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ClientesService {
	private APIURL: string = 'http://localhost:3000/clientes';

	constructor(private http: HttpClient) {}

	getClientes(): Observable<Cliente[]> {
		return this.http.get<Cliente[]>(this.APIURL);
	}

	getCliente(id: number): Observable<Cliente> {
		return this.http.get<Cliente>(this.APIURL + '/' + id);
	}

	deleteCliente(id: number): Observable<any> {
		return this.http.delete(this.APIURL + '/' + id);
	}

	updateCliente(id: number, updatedcliente: Cliente): Observable<any> {
		return this.http.put(`${this.APIURL}/${id}`, updatedcliente);
	}

	addCliente(cliente: Cliente): Observable<any> {
		return this.http.post(`${this.APIURL}/`, cliente);
	}
}
