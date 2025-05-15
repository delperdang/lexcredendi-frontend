import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newsItems = [
    { title: 'Welcome to LexCredendi', content: 'This is the new home page for the LexCredendi web app.  We are currently under construction.' },
    { title: 'Apologetics Section Coming Soon', content: 'Exciting updates are coming to the Apologetics section. Stay tuned!' },
    { title: 'Explore the Bible', content: 'Dive deep into scripture with our Bible resources.' }
  ];
}