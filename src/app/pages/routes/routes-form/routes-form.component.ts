import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrl: './routes-form.component.css'
})
export class RoutesFormComponent{
  user_id = this.router.snapshot.params['id']
  protected routesForm: FormGroup;
  driver: any = {}
  
  constructor(protected formBuilder: FormBuilder, protected httpClient:HttpClient, protected route:Router, protected router:ActivatedRoute) {
    if (router.snapshot.params['id'] == '0'){}else{
    this.getDriver();
    }
    this.routesForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      availability: [null, [Validators.required]],
      price: [null, [Validators.required]],
      id_zone:[null,[Validators.required]],
      driverId:[null]
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

getDriver() {
  this.httpClient.get('http://localhost:3000/drivers/'+ this.user_id).subscribe(response => {
      this.driver = response;
      console.log(this.driver)
      this.routesForm.patchValue({
        driverId: this.driver.id_driver
      })
      console.log(this.routesForm.value)
    });
}

submit() {
  this.routesForm.markAllAsTouched()
  if (this.routesForm.valid) {
    const data = this.routesForm.value;
    this.httpClient.post('http://localhost:3000/routes', data).subscribe(response => {
    }, (error) => {
      console.log(error)
      alert('Error al crear la ruta');
    });
  }
 }
}
