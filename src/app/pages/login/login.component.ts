import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any = {};
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(5)]],
      user: [null, [Validators.required]],
    });
  }

  async submitForm() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const data = this.form.value;
      const user = await this.authService.login(data)
      console.log(user);
      if (user === null) {
        alert('Usuario no encontrado');
      } else {
        alert('¡Bienvenido!');
        if (user.role_id === 2) {
          this.router.navigate(['driverhome', user.id_user]);
        } else if (user.role_id === 1) {
          this.router.navigate(['home', user.id_user]);
        }
      }
    }
  }
}