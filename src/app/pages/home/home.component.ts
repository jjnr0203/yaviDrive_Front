import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userId = this.route.snapshot.params['id']
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  router: Router,private route: ActivatedRoute) {}

}
