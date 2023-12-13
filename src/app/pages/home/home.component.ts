import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userId = this.router.snapshot.params['id']
  user: any = {};
  constructor(protected httpClient: HttpClient, protected formBuilder: FormBuilder, protected route: Router, private router: ActivatedRoute) {
    if (router.snapshot.params['id'] == '0') { }

    this.getCustomer();
  }

  getCustomer() {
    this.httpClient.get('http://localhost:3000/customer/' + this.userId).subscribe(response => {
      this.user = response
      console.log(this.user)

    })
  }
}
