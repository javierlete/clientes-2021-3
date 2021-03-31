import { Injectable } from '@angular/core';
import { Mensaje } from '../modelos/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: Mensaje[] = [];

  agregar(mensaje: Mensaje): void {
    this.mensajes.push(mensaje);
  }

  limpiar(): void {
    // this.mensajes = [];
    this.mensajes.splice(0, this.mensajes.length);
  }
}
