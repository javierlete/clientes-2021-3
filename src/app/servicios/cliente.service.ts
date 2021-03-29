import { Cliente } from 'src/app/modelos/cliente';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:3000/clientes/';

  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URL);
  }

  obtenerPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.URL + id);
  }

  borrarCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.URL + id);
  }
}
