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
  userId = this.router.snapshot.params['id']
  routes:any = [] ;
  user: any = {};

  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  route: Router,private router: ActivatedRoute,) {
    this.postRegister(7);
    this.getRoutes();
    this.getCustomer();
  }

  getRoutes() {
    this.httpClient
      .get('http://localhost:3000/routes')
      .subscribe((respuesta: any) => {
        this.routes = respuesta;
        console.log(this.routes);
      });
  }

  getCustomer() {
    this.httpClient.get('http://localhost:3000/customer/' + this.userId).subscribe(response => {
      this.user = response
      console.log(this.user)

    })
  }


   postRegister(id:number){
    const data={
      customer:this.user.id_customer,
      idRoute:id
    }
    console.log(data)
  }
 
  
  submit() {
    if (this.routes.valid) {
      const data = this.routes.value;
      this.httpClient.post('http://localhost:3000/routes', data).subscribe(response => {
        this.routes.navigate(['receipt/' + this.userId])
  });
}
  }

}
