import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrl: './routes-form.component.css'
})
export class RoutesFormComponent {
  constructor(private formBuilder: FormBuilder, protected form: FormGroup) {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]]
    })

  }
}
