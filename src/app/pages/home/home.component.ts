import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> de6dfaf7694f9795632e9f7594095a2666734a5a

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
<<<<<<< HEAD
=======
export class HomeComponent {
  userId = this.route.snapshot.params['id']
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  router: Router,private route: ActivatedRoute) {}
>>>>>>> de6dfaf7694f9795632e9f7594095a2666734a5a


export class HomeComponent {
  userId = this.router.snapshot.params['id']
  user: any = {};
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  route: Router,private router: ActivatedRoute){
    if (router.snapshot.params['id'] == '0'){}
  
    this.getCustomer();
  }

  getCustomer(){
    this.httpClient.get('http://localhost:3000/customer/' + this.userId).subscribe(response =>{
      this.user = response
      console.log(this.user)

      if(this.user.id_role == 2){

        this.router.navigate(['driver-home/' + this.user.id.user])
      }else if(this.user.id_role == 1){
        this.router.navigate(['home/' + this.user.id.user])
      }
    })
  }
}

