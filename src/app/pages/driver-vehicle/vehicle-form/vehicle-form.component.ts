import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.css',
})
export class VehicleFormComponent {
  userId = this.activatedRoute.snapshot.params['id'];
  driver: any = {};
  vehicle: any = {};
  vehicleForm: FormGroup;
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (activatedRoute.snapshot.params['id'] == '0') { }
    if (activatedRoute.snapshot.params['id'] != '0') {
      this.getVehicle();
      this.getDriver()

    }
    this.vehicleForm = this.formBuilder.group({
      registration: [null, Validators.required],
      color: [null, Validators.required],
      model: [null, Validators.required],
      brand: [null, Validators.required],
      numseats: [null, Validators.required],
      iddriver: [null],
    });
  }

  
  getDriver(){
    this.httpClient.get('http://localhost:3000/drivers/'+ this.userId).subscribe(response=>{
      this.driver= response
      console.log(this.driver)
       this.vehicleForm.patchValue({
        iddriver: this.driver.id_driver
      }) 
    })
  }

  getVehicle() {
    this.httpClient.get('http://localhost:3000/vehicle/' + this.userId).subscribe((response) => {
      this.vehicle = response;
      console.log(this.vehicle)
      this.vehicleForm.setValue(this.vehicle);
    });
  }

  vehicleUpdate() {
    this.getVehicle();
    this.vehicleForm.markAllAsTouched();
    if (this.vehicleForm.valid) {
    const data = this.vehicleForm.value;
    this.httpClient
      .put('http://localhost:3000/vehicle/'+ this.vehicle.iddriver, data)
      .subscribe((response) => {  
      },(error) => {
        console.log(error)
        alert('Error al actualizar el vehículo');
      });
    }
  }

  submit() {
    if (this.vehicle) {
      this.vehicleUpdate();
      alert('actualizado')
      this.router.navigate(['driverhome/'+ this.userId])
    } else {
      this.getDriver()
      this.vehicleForm.markAllAsTouched();
      if (this.vehicleForm.valid) {
        const data = this.vehicleForm.value;
        console.log(data)
        this.httpClient.post('http://localhost:3000/vehicle', data).subscribe(
          (response) => {
            alert(response);
            this.router.navigate(['login']);
          },
          (error) => {
            console.log(error);
            alert('error al crear el vehiculo');
          }
        );
      }
    }
  }
}
