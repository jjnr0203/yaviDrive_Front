import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registro: any ;

  constructor(private httpClient: HttpClient, private router:Router) {
    this.getRegister();
  }

  getRegister() {
    this.httpClient
      .get('http://localhost:3000/register')
      .subscribe((respuesta: any) => {
        this.registro = respuesta;
        console.log(respuesta);
      });
  }


}
