import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MainpageService } from './mainpage.service';
@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    HttpClientModule,
  ],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainPageComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

   usernameValue = this.form.get('username')?.value;
   emailValue = this.form.get('email')?.value;
   addressValue = this.form.get('address')?.value;
   passwordValue = this.form.get('password')?.value;
   
   constructor(private mainpageService: MainpageService) {}
    async onSubmit() {
      if (this.form.valid) {
        const body = {
          name: this.usernameValue,
          email: this.emailValue,
          address: this.addressValue,
          password:this.passwordValue
        };
  
        try {
          const result = await this.mainpageService.registerUser(body).toPromise();
          
          if (result) {  // If the backend responds successfully
            console.log("Good! User created", result);
            alert("User Registered Successfully!");
          } else {
            console.log(" Some error occurred, user can't be created");
            alert("User Registration Failed!");
          }
        } catch (error) {
          console.error(" Can't reach backend:", error);
        }
      } else {
        console.log(" Form is invalid!");
      }
    }
  
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
}

