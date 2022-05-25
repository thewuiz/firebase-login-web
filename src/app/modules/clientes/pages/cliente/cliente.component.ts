import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente } from '@models/cliente';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit, OnDestroy {
  public clientes: Cliente[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    // this.service.getTest().subscribe((response) => console.log(response));
    this.getAllClientes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllClientes() {
    this.subscription.add(
      this.service.getAllClientes().subscribe({
        next: (response) => {
          this.clientes = response;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {},
      })
    );
  }

  deleteClienteById(cliente: Cliente) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.subscription.add(
          this.service.deleteUsuario(cliente.id).subscribe({
            next: (response) => {
              this.clientes = this.clientes.filter((cli) => cli !== cliente);
              Swal.fire('OK!', response.mensaje, 'success');
            },
            error: (error) => {
              console.error(error);
              Swal.fire(
                'Ups!',
                `Ocurrio un error al eliminar al cliente`,
                'error'
              );
              console.error(error);
            },
            complete: () => {},
          })
        );
      }
    });
  }
}
