import { NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel,MatFormField,MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-mainpage',
  standalone:true,
  imports: [NgIf,FormsModule,ReactiveFormsModule,MatLabel,MatFormField,MatError,MatInputModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  
  form= new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    email:new FormControl('abc@gmail.com'),
    address:new FormControl(''),
    password:new FormControl('')
    ,
  })
}
