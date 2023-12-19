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
  driverId = this.activatedRoute.snapshot.params['id'];
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
    }

    this.vehicleForm = this.formBuilder.group({
      registration: [null, Validators.required],
      color: [null, Validators.required],
      model: [null, Validators.required],
      brand: [null, Validators.required],
      numseats: [null, Validators.required],
      iddriver: [this.driverId],
    });
  }

  getVehicle() {
    this.httpClient.get('http://localhost:3000/vehicle/' + this.driverId).subscribe((response) => {
      this.vehicle = response;
      console.log(this.vehicle)
      this.vehicleForm.setValue(this.vehicle);
    });
  }

  vehicleUpdate() {
    this.getVehicle();
    const data = this.vehicleForm.value;
    this.httpClient
      .put('http://localhost:3000/vehicle/'+ this.vehicle.iddriver, data)
      .subscribe((response) => {  
      },(error) => {
        console.log(error)
        alert('Error al actualizar el vehículo');
      });
  }

  submit() {
    if (this.vehicle) {
      this.vehicleUpdate;
      alert('actualizado')
      this.router.navigate(['driverhome/'+ this.driverId])
    } else {
      this.vehicleForm.markAllAsTouched();
      if (this.vehicleForm.valid) {
        const data = this.vehicleForm.value;
        this.httpClient.post('http://localhost:3000/vehicle', data).subscribe(
          (response) => {
            alert('vehiculo creado');
            console.log(response);
            this.vehicleForm.reset();
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
