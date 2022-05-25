import { Component, OnInit } from '@angular/core';
import { Appointment } from '@models/appointment';
import { Carrier } from '@models/carrier';
import { Cliente } from '@models/cliente';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css'],
})
export class CarrierComponent implements OnInit {
  public carriers: Carrier[] = [];
  public appointments: Appointment[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getAllCarriers();
    this.getAllAppointments();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllAppointments() {
    this.subscription.add(
      this.service.getAllAppointments().subscribe((response) => {
        this.appointments = response;
      })
    );
  }

  getAllCarriers() {
    this.subscription.add(
      this.service.getAllCarriers().subscribe({
        next: (response) => {
          this.carriers = response;
        },
        error: (err) => {
          Swal.fire('Ups!', err.error.message, 'error');
          //console.error(err);
        },
        complete: () => {},
      })
    );
  }

  deleteClienteById(carrier: any) {
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.subscription.add(
    //       this.service.deleteUsuario(cliente.id).subscribe({
    //         next: (response) => {
    //           this.clientes = this.clientes.filter((cli) => cli !== cliente);
    //           Swal.fire('OK!', response.mensaje, 'success');
    //         },
    //         error: (error) => {
    //           console.error(error);
    //           Swal.fire(
    //             'Ups!',
    //             `Ocurrio un error al eliminar al cliente`,
    //             'error'
    //           );
    //           console.error(error);
    //         },
    //         complete: () => {},
    //       })
    //     );
    //   }
    // });
  }
}
