import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../../sign-up/sign-up.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrl: './driver-form.component.css'
})
export class DriverFormComponent {
  userId = this.activatedRoute.snapshot.params['id']
  driverForm: FormGroup;
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  router: Router,private activatedRoute: ActivatedRoute) {
    if (this.userId == 0){}if (this.userId!=0) {
    }
    this.driverForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      photo: [null, Validators.required],
      phone: [null, Validators.required],
      user_id: [this.userId]
    });
  }

  submit() {
    this.driverForm.markAllAsTouched();
    if (this.driverForm.valid) {
      const data = this.driverForm.value;
      this.httpClient.post('http://localhost:3000/drivers', data).subscribe(response => {
        alert(response)
        this.router.navigate(['vehicle-form/'+ this.userId])
      },(error) => {
        console.log(error)
        alert('Error al crear el conductor');
      });
    }
  }
}


