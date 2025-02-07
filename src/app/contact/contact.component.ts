import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatCardHeader } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [NgFor,MatCardModule,MatButton,MatCard,MatCardContent,MatCardHeader,MatCardActions],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   Object = [
    {
        header: "The Future of AI",
        content: "Artificial Intelligence is evolving rapidly, impacting industries from healthcare to finance."
    },
    {
        header: "Space Exploration",
        content: "NASA and private companies are advancing deep space travel, aiming for Mars colonization."
    },
    {
        header: "Cybersecurity Trends",
        content: "With increasing cyber threats, organizations are investing heavily in data protection and encryption."
    },
    {
        header: "Renewable Energy Growth",
        content: "Solar and wind power are becoming the primary energy sources as the world shifts towards sustainability."
    },
    {
        header: "Quantum Computing",
        content: "Quantum computers promise to solve complex problems faster than traditional computers ever could."
    }
];



}
