import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:any = {}
  protected form: FormGroup;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(5)]],
      user: [null, [Validators.required]],
    })

  };

  submitForm() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      const data = this.form.value;
      this.httpClient.post('http://localhost:3000/login', data).subscribe(response => {
        this.user = response
<<<<<<< HEAD
        alert('usuario encontrado')
        console.log(this.user)
        this.router.navigate(['/home' + this.user.id_user])
      }, (error)=>{
        console.log(error)
        alert('error al validar las credenciales')
      }
      );
=======
        console.log(this.user)
        alert('usuario encontrado');
        if(this.user.id_role == 2){
           this.router.navigate(['dirverhome/'+ this.user.id_user])
          }else if(this.user.id_role == 1){
          this.router.navigate(['customerhome/'+ this.user.id_user])
        }
      });
>>>>>>> de6dfaf7694f9795632e9f7594095a2666734a5a
    }
  }
}
