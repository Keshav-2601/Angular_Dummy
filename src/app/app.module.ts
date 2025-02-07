import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule} from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import {HelpPageComponent}from './help-page/help-page.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot([
      {path:'Contact',component:ContactComponent},
      {path:'Mainpage',component: MainpageComponent},
      {path:'help',component:HelpPageComponent},
      {path:"**",component:AppComponent}
    ])
  ],
  providers: [],
})
export class AppModule { }

bootstrapApplication(AppComponent);
