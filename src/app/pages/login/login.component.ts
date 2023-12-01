import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected form: FormGroup;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(5)]],
      user: [null, [Validators.required]],
    })

  };

  submitForm() {
    if (this.form.valid) {
      const data = this.form.value;
      this.httpClient.post('http://localhost:3000/login', data).subscribe(response => {
        alert(response);
      });
    }
  }
}
