import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrl: './routes-form.component.css'
})
export class RoutesFormComponent {
  driver_id = this.router.snapshot.params['id']
  protected routesForm: FormGroup;


  
  constructor(protected formBuilder: FormBuilder, protected httpClient:HttpClient, protected route:Router, protected router:ActivatedRoute) {
    if (router.snapshot.params['id'] == '0'){}
    this.routesForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      availability: [null, [Validators.required]],
      price: [null, [Validators.required]],
      id_zone:[null,[Validators.required]],
      id_driver:[this.driver_id],
    });
    this.getZones();
  }
  //fk zone
zones : any = [];
getZones(){
this.httpClient.get('http://localhost:3000/zone').subscribe(response =>{
    this.zones = response;
    console.log(this.zones);
 });
}
}

