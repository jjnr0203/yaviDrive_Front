import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent {
  userId = this.activatedRoute.snapshot.params['id']
  routes: any = [];
  customer: any = {};


  constructor(protected httpClient: HttpClient, protected formBuilder: FormBuilder, protected router: Router, private activatedRoute: ActivatedRoute,) {
    this.getRoutes();
    this.getCustomer();
  }

  getRoutes() {
    this.httpClient
      .get('http://localhost:3000/routes/')
      .subscribe((respuesta: any) => {
        this.routes = respuesta;
        console.log(this.routes);
      });
  }

  getCustomer() {
    this.httpClient.get('http://localhost:3000/customer/' + this.userId).subscribe(response => {
      this.customer = response
      console.log(this.customer)
    })
  }


  postRegister(id: number) {
    const data = {
      customer: this.customer.id_customer,
      idRoute: id
    };

    this.httpClient.post('http://localhost:3000/register', data).subscribe(
      (response: any) => {
        alert(response)
      },
      (error: any) => {
        alert('Error al crear el registro');
        console.error(error);
      }
    );
  }
}
