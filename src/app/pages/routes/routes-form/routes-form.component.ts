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
  userId = this.router.snapshot.params['id']
  protected routesForm: FormGroup;
  driver: any = {}
  routeinfo: any;

  constructor(protected formBuilder: FormBuilder, protected httpClient:HttpClient, protected route:Router, protected router:ActivatedRoute) {
  /*   if (this.select == null){
    this.getZones();
  }else{
    this.getDriver();
    this.getRoute();
  } */
  if(this.userId ==0){}if(this.userId != 0){
      this.getZones();
      this.getDriver();
    this.getRoute();
    }
    this.routesForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      availability: [null, [Validators.required]],
      price: [null, [Validators.required]],
      id_zone:[null,[Validators.required]],
      driverId:[null]
    });
  }

  //fk zone
zones : any = [];
getZones(){
this.httpClient.get('http://localhost:3000/zone').subscribe(response =>{
    this.zones = response;
    console.log(this.zones)
 });
}

getRoute(){
  this.httpClient.get('http://localhost:3000/routes/'+this.userId).subscribe(response=>{
    this.routeinfo = response
    console.log(this.routeinfo,'asdasd')
    this.routesForm.patchValue(response)
  })
}

getDriver() {
  this.httpClient.get('http://localhost:3000/drivers/'+ this.userId).subscribe(response => {
      this.driver = response;
      this.routesForm.patchValue({
        driverId: this.driver.id_driver
      })
    });
}

routeUpdate() {
  this.getDriver();
  const data = this.routesForm.value;
  this.httpClient
    .put('http://localhost:3000/routes/'+ this.routeinfo.id_routes, data)
    .subscribe(response => {
      alert(response)
    }
    );
}

submit() {
  this.routesForm.markAllAsTouched();
  if (this.routesForm.valid) {
    if (this.routeinfo) {
      this.routeUpdate();
    } else {
      const data = this.routesForm.value;
      this.httpClient.post('http://localhost:3000/routes', data).subscribe(response => {
      }, (error) => {
        console.log(error);
        alert('Error al crear la ruta');
      });
    }
  }
}

}