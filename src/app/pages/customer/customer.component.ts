import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-from',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  userId = this.activatedRoute.snapshot.params['id']
  customerForm: FormGroup;
  customer: any = {};
  
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  router: Router,private activatedRoute: ActivatedRoute) {
    if (activatedRoute.snapshot.params['id'] == '0'){}
    if (activatedRoute.snapshot.params['id'] != '0') {
      this.getCustomer()
    }
    this.customerForm = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      photo: [null, Validators.required],
      phone: [null, Validators.required],
      user_id: [this.userId],
    });
 }

 submit() {
  if (this.customer) {
    this.customerUpdate();
    alert('actualizado')
    this.router.navigate(['home/'+ this.userId])
  } else {
  if (this.customerForm.valid) {
    const data = this.customerForm.value;
    this.httpClient.post('http://localhost:3000/customer', data).subscribe(response => {
      alert('Usuario creado')
      this.router.navigate(['login'])
    },(error) => {
      console.log(error)
      alert('Error al crear el usuario');
    });
  }
}
}

getCustomer(){
  this.httpClient.get('http://localhost:3000/customer/'+ this.userId).subscribe((response: any) => {
        this.customer = response;
        console.log(this.customer);
        this.customerForm.patchValue(this.customer)
  })
}

customerUpdate() {
  this.getCustomer();
  this.customerForm;
  if (this.customerForm.valid) {
  const data = this.customerForm.value;
  this.httpClient
    .put('http://localhost:3000/customer/'+ this.customer.id_customer, data)
    .subscribe((response) => {  
    },(error) => {
      console.log(error)
      alert('Error al actualizar el datos del usuario');
    });
  }
}

}