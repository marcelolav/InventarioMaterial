import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rubro } from '../models/rubro';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RubrosService {
	private APIURL: string = 'http://localhost:3000/rubros';

	constructor(private http: HttpClient) {}

	getRubros(): Observable<Rubro[]> {
		return this.http.get<Rubro[]>(this.APIURL);
	}

	getRubro(id: number): Observable<Rubro> {
		return this.http.get<Rubro>(this.APIURL + '/' + id);
	}

	deleteRubro(id: number): Observable<any> {
		return this.http.delete(this.APIURL + '/' + id);
	}
	updateRubro(id: number, updatedRubro: Rubro): Observable<any> {
		return this.http.put(`${this.APIURL}/${id}`, updatedRubro);
	}
	addRubro(rubro: Rubro): Observable<any> {
		return this.http.post(`${this.APIURL}/`, rubro);
	}
}
