import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '@models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private base_url: String = environment.base_url;

  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.base_url}/clientes`);
  }

  deleteUsuario(id: String): Observable<any> {
    return this.http.delete<any>(`${this.base_url}/clientes/${id}`);
  }
}
