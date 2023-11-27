import { Component } from '@angular/core';
import { last } from 'rxjs';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent {

  protected form:FormGroup;
  
  constructor(private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      name:[null,[ Validators.required,Validators.minLength(3)]],
      age:[null]
      })
    
   
    }

}


