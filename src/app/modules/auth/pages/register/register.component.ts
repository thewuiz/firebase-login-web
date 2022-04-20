import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: User = new User();
  constructor() {}

  ngOnInit(): void {}
  register() {}
}
