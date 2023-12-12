import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent {

  routes:any = [] ;

  constructor(private httpClient: HttpClient) {
    this.getRoutes();
  }

  getRoutes() {
    this.httpClient
      .get('http://localhost:3000/routes')
      .subscribe((respuesta: any) => {
        this.routes = respuesta;
        console.log(this.routes);
      });
  }


}
