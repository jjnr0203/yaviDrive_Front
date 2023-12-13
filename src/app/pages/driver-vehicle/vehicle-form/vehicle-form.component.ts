import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.css'
})
export class VehicleFormComponent {
  driverId = this.router.snapshot.params['id']
  vehicleForm: FormGroup;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private route: Router,private router: ActivatedRoute) {
    if (router.snapshot.params['id'] == '0'){}

    this.vehicleForm = this.formBuilder.group({
      registration: [null, Validators.required],
      color: [null, Validators.required],
      model: [null, Validators.required],
      brand: [null, Validators.required],
      numSeats: [null, Validators.required],
      idDriver: [this.driverId]
    })
  }

  submit() {
    this.vehicleForm.markAllAsTouched();
    if(this.vehicleForm.valid){
      const data = this.vehicleForm.value;
      this.httpClient.post('http://localhost:3000/vehicle', data).subscribe(response => {
      alert('vehiculo creado')
      console.log(response)
      this.route.navigate(['login'])
      this.vehicleForm.reset();
    },(error)=>{
      console.log(error)
      alert('error al crear el vehiculo');
    });
  }

  }
}
