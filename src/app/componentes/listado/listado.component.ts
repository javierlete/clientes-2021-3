import { ClienteService } from './../../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.obtenerClientes().subscribe(
      clientes => this.clientes = clientes);
  }

  borrar(id: number): void {
    this.clienteService.borrarCliente(id).subscribe();
  }
}
