import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrier } from '@models/carrier';
import { Cliente } from '@models/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { doc, Firestore, getDoc, getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat';
import { Appointment } from '@models/appointment';

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

  // ====================> CARRIERS <====================
  getAllCarriers(): Observable<Carrier[]> {
    return this.http.get<Carrier[]>(`${this.base_url}/carriers/all`);
  }

  createCarrier(carrier: Carrier) {
    return this.http.post<Carrier>(`${this.base_url}/carriers/create`, carrier);
  }

  // ====================> Appointment <====================
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.base_url}/appointments/all`);
  }
}
