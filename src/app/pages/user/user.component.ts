import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  protected form: FormGroup;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cedula: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(10), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email, Validators.pattern(/^.+@yavirac\.edu\.ec$/)]],
      id_role: [null, [Validators.required]]
    })
  }

  submitForm() {
    if (this.form.valid) {
      const data = this.form.value;
      this.httpClient.post('http://localhost:3000/users', data).subscribe(response => {
        alert(response);
      });
    }
  }
  userUpdate() {
    const data = this.form.value;
    this.httpClient
      .put('http://localhost:3000/users/20', data)
      .subscribe(response => {
        alert(response)
      }
      );
  }
}




