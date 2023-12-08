import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
