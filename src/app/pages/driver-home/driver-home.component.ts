import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrl: './driver-home.component.css'
})


export class DriverHomeComponent {
  userId = this.activateRouter.snapshot.params['id']
  driver: any = {};
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  router: Router,private activateRouter: ActivatedRoute){
    if (activateRouter.snapshot.params['id'] == '0'){}
  
    this.getDriver();
  }

  getDriver(){
    this.httpClient.get('http://localhost:3000/home/drivers/' + this.userId).subscribe(response =>{
      this.driver = response
      console.log(this.driver)
    })
  }
}