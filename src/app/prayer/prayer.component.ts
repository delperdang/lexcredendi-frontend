import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';

interface Prayer {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-prayer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './prayer.component.html',
  styleUrl: './prayer.component.css'
})
export class PrayerComponent implements OnInit {
  prayers: Prayer[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPrayers().subscribe(prayers => {
      this.prayers = prayers;
    });
  }

  fetchPrayers(): Observable<Prayer[]> {
    return this.http.get<Prayer[]>('https://delperdang.pythonanywhere.com/prayer/');
  }
}