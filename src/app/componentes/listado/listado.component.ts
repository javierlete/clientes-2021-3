import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  clientes: Cliente[] = [
    { id: 1, nombre: 'Javier', apellidos: 'Lete' },
    { id: 2, nombre: 'Pepillo', apellidos: 'Pérez' },
  ];
}
