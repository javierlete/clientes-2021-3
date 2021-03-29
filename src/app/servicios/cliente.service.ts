import { Cliente } from 'src/app/modelos/cliente';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[] = [
    { id: 1, nombre: 'Javier', apellidos: 'Lete' },
    { id: 2, nombre: 'Pepillo', apellidos: 'Pérez' },
  ];

  obtenerClientes(): Observable<Cliente[]> {
    return of(this.clientes);
  }
}
