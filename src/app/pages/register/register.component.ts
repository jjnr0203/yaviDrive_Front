import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  userId = this.router.snapshot.params['id']
  registros: any = [] ;

  constructor(protected  httpClient: HttpClient,protected  route: Router,private router: ActivatedRoute) {
    this.getRegister();

  }

  getRegister() {
    this.httpClient.get('http://localhost:3000/register/'+ this.userId).subscribe((respuesta: any) => {
        this.registros = respuesta;
        console.log(this.registros);
      });
  }

}
