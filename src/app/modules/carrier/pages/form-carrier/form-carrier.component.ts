import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrier } from '@models/carrier';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-carrier',
  templateUrl: './form-carrier.component.html',
  styleUrls: ['./form-carrier.component.css'],
})
export class FormCarrierComponent implements OnInit {
  public errors: string[] = [];
  public carrier: Carrier = new Carrier();
  private subscription: Subscription = new Subscription();

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {}

  createCarrier() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Seguro que deseas crear al transportista',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.subscription.add(
          this.service.createCarrier(this.carrier).subscribe({
            next: (response) => {
              Swal.fire('OK!', 'Transportista creado exitosamente', 'success');
              this.router.navigateByUrl('/home/carriers');
            },
            error: (error) => {
              this.errors = error.error.errors;
              Swal.fire(
                'Ups!',
                `Ocurrio un error al crear al cliente`,
                'error'
              );
              console.log(error);
            },
            complete: () => {},
          })
        );
      }
    });
  }
}
