import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { NgFor } from '@angular/common';
import { RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule,RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}