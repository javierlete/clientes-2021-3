import { ClienteService } from './../../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { Location } from '@angular/common';

const CLIENTE_VACIO = { id: 0, nombre: '', apellidos: '' };

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = CLIENTE_VACIO;
  id = 0;

  constructor(
    private router: ActivatedRoute,
    private clienteService: ClienteService) { }

  aceptar(): void {
    console.log(this.cliente);

    if (this.id) {
      this.clienteService.modificarCliente(this.cliente).subscribe(
        () => this.volverAListado()
      );
    } else {
      this.clienteService.insertarCliente(this.cliente).subscribe(
        this.volverAListado.bind(this)
      );
    }
  }

  volverAListado(): void {
    // TODO: implementar navegación https://angular.io/guide/router#specifying-a-relative-route
  }

  ngOnInit(): void {
    // TODO: Demostrar problema con componente siempre a la vista
    this.id = +this.router.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id) {
      this.clienteService.obtenerPorId(this.id).subscribe(
        cliente => this.cliente = cliente
      );
    } else {
      this.cliente = CLIENTE_VACIO;
    }
  }
}
