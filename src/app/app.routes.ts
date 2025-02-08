import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: 'Contact', component: ContactComponent }, 
  { 
    path: 'Mainpage', 
    loadComponent: () => import('./mainpage/mainpage.component').then(m => m.MainPageComponent), 
    providers: [importProvidersFrom(ReactiveFormsModule)] 
  }, 
  { 
    path: 'Help', 
    loadComponent: () => import('./help-page/help-page.component').then(m => m.HelpPageComponent) 
  }
];
