import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MainpageService} from './mainpage/mainpage.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [MainpageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
