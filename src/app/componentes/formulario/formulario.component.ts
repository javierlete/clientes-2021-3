import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  cliente: Cliente = { id: 5, nombre: 'Prueba', apellidos: 'Pruebez' };

  aceptar(): void {
    console.log(this.cliente);
  }
}
