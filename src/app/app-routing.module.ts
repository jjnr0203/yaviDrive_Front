import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { DriverFormComponent } from './pages/driver-vehicle/driver-form/driver-form.component';
import { VehicleFormComponent } from './pages/driver-vehicle/vehicle-form/vehicle-form.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoutesComponent } from './pages/routes/routes/routes.component';
import { RoutesFormComponent } from './pages/routes/routes-form/routes-form.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DriverHomeComponent } from './pages/driver-home/driver-home.component';
import{AuthGuard} from '../app/pages/auth/auth.guard'
const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'driver/:id', component: DriverFormComponent },
  { path: 'vehicle-form/:id', component: VehicleFormComponent },
  {path:'register/:id',canActivate: [AuthGuard], component:RegisterComponent},
  {path: 'home/:id',canActivate: [AuthGuard], component:HomeComponent}, 
  {path: 'driverhome/:id',canActivate: [AuthGuard], component:DriverHomeComponent}, 
  {path: 'routes/:id',canActivate: [AuthGuard], component:RoutesComponent}, 
  {path: 'routes-form/:id',canActivate: [AuthGuard], component:RoutesFormComponent}, 
  {path: 'customer/:id', component: CustomerComponent},
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
