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
  registroC: any = {} ;
  registroD: any = {} ;

  constructor(protected  httpClient: HttpClient,protected  route: Router,private router: ActivatedRoute) {
    this.getRegisterC();
    this.getRegisterD();
  }

  getRegisterC() {
    this.httpClient.get('http://localhost:3000/register/'+ this.userId).subscribe((respuesta: any) => {
        this.registroC = respuesta;
        console.log(this.registroC);
      });
  }

  getRegisterD() {
    this.httpClient.get('http://localhost:3000/register/d/'+ this.userId).subscribe((respuesta: any) => {
        this.registroD = respuesta;
        console.log(this.registroD);
      });
  }
  

}
