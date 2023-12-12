import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-routes-form',
  templateUrl: './routes-form.component.html',
  styleUrl: './routes-form.component.css'
})
export class RoutesFormComponent {
  
  protected form:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.form=this.formBuilder.group({
      name:[null, [Validators.required]],
      age:[null, [Validators.required]]
    })

  }
}
