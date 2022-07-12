import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
})
export class UsuarioCreateComponent implements OnInit {
  public user: User = new User();
  public errors: String[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private service: ApiService, private router: Router) {}

  ngOnInit(): void {}

  createUser() {
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
          this.service.createUsuario(this.user).subscribe({
            next: (response) => {
              Swal.fire('OK!', 'Usuario creado exitosamente', 'success');
              this.router.navigateByUrl('/usuarios');
            },
            error: (error) => {
              this.errors = error.error.errors;
              Swal.fire(
                'Ups!',
                `Ocurrio un error al crear al usuario`,
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
