import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { DriverFormComponent } from './pages/driver-vehicle/driver-form/driver-form.component';
import { VehicleFormComponent } from './pages/driver-vehicle/vehicle-form/vehicle-form.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
<<<<<<< HEAD
import { from } from 'rxjs';
=======
import { RoutesComponent } from './pages/routes/routes/routes.component';
import { RoutesFormComponent } from './pages/routes/routes-form/routes-form.component';
import { CustomerComponent } from './pages/customer/customer.component';
>>>>>>> de6dfaf7694f9795632e9f7594095a2666734a5a

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'driver/:id', component: DriverFormComponent },
  { path: 'vehicle-form/:id', component: VehicleFormComponent },
  {path:'register', component:RegisterComponent},
<<<<<<< HEAD
  {path: 'home/:id', component:HomeComponent},
];
=======
  {path: 'home/:id', component:HomeComponent}, 
  {path: 'routes', component:RoutesComponent}, 
  {path: 'routes-form', component:RoutesFormComponent}, 
  {path: 'customer', component: CustomerComponent},
  ]
>>>>>>> de6dfaf7694f9795632e9f7594095a2666734a5a


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
