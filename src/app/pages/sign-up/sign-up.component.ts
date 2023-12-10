import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public user: any = {}
  protected form: FormGroup;

  constructor(protected httpClient: HttpClient, protected formBuilder: FormBuilder, protected router: Router) {
    // formulario de registro
    this.form = this.formBuilder.group({
      cedula: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(10), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email, Validators.pattern(/^.+@yavirac\.edu\.ec$/)]],
      id_role: [null, [Validators.required]]
    });
    this.getRoles();
  }
  // foreign key
  roles: any = [];
  getRoles() {
    this.httpClient.get('http://localhost:3000/roles').subscribe(response => {
      this.roles = response;
    });
  }


  submit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.httpClient.post('http://localhost:3000/users', data).subscribe(response => {
        this.user = response;
        console.log(this.user);
        alert('usuario creado');
        if(this.user.id_role==2){
          this.router.navigate(['driver/' + this.user.id_user]);
        }

      },(error) => {
        console.log(error)
        alert('Error al crear el usuario');
      });
      this.form.reset();
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




