import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppComponent } from './app.component';
import { HelpPageComponent } from './help-page/help-page.component';

export const routes: Routes = [
  { path: 'Contact', component: ContactComponent },
  { path: 'Mainpage', component: MainpageComponent },
  {path:'help',component:HelpPageComponent}
];
