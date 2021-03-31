import { MensajeService } from './mensaje.service';
import { Cliente } from 'src/app/modelos/cliente';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URL = 'http://localhost:3000/clientes/';

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService) { }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URL).pipe(
      tap(() => this.mensajeService.agregar({nivel: 'success', texto: 'Se han obtenido todos los registros'})),
      catchError( (err, caught) => {
        this.mensajeService.agregar({nivel: 'danger', texto: 'Ha habido un problema al pedir los registros'});
        this.mensajeService.agregar(err.message);
        console.error(err, caught);
        return [];
      })
    );
  }

  obtenerPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.URL + id);
  }

  insertarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URL, cliente);
  }

  modificarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.URL + cliente.id, cliente);
  }

  borrarCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.URL + id);
  }
}
