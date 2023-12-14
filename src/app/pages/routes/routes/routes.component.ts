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

/*   postRegister(id:number){
    const data={
      start_date : this.start_date,  
    }
    this.httpClient.post('',data).subscribe()
  }
 */
  
  /* submit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      const data = this.form.value;
      this.httpClient.post('http://localhost:3000/users', data).subscribe(response => {
        //this.user = response;
        //console.log(this.user);
        alert('usuario creado');
  } */
}
