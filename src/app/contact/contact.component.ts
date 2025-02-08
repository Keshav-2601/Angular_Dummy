import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
//import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  objects = [
    { header: "AI Evolution", content: "Artificial Intelligence is transforming industries." },
    { header: "Space Exploration", content: "Mars missions are becoming reality." },
    { header: "Cybersecurity Trends", content: "Protecting data is more important than ever." }
  ];
}
