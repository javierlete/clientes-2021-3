import { ClienteService } from './../../servicios/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = { id: 0, nombre: '', apellidos: '' };

  constructor(
    private router: ActivatedRoute,
    private clienteService: ClienteService) { }

  aceptar(): void {
    console.log(this.cliente);
  }

  ngOnInit(): void {
    // TODO: Demostrar problema con componente siempre a la vista
    const id = +this.router.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.clienteService.obtenerPorId(id).subscribe(
        cliente => this.cliente = cliente
      );
    }
  }
}
