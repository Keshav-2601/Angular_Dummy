import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  imports: [NgFor],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
  helpline_data = [
    {"Category": "Emergency", "Number": "112", "Country": "Global"},
    {"Category": "Police", "Number": "911", "Country": "USA"},
    {"Category": "Fire", "Number": "999", "Country": "UK"},
    {"Category": "Medical", "Number": "108", "Country": "India"},
    {"Category": "Mental Health", "Number": "988", "Country": "USA"},
   
  ]
}
