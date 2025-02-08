import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {
  helpline_data = [  // ✅ Add missing data
    { name: 'Tech Support', phone: '1800-123-456' },
    { name: 'Customer Care', phone: '1800-987-654' }
  ];
}
