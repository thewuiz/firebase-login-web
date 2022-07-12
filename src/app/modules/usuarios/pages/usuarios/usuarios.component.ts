import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  public usuarios: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  getAllUsuarios() {
    this.subscription.add(
      this.service.getAllUsuarios().subscribe({
        next: (response) => {
          this.usuarios = response;
        },
        error: (err) => {
          Swal.fire('Ups!', err.error.message, 'error');
          //console.error(err);
        },
        complete: () => {},
      })
    );
  }

  deleteUsuarioById(user: User) {}
}
