import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';

interface Prayer {
  code: number;
  title: string;
  text: string;
  latin_title: string;
  latin_text: string;
}

@Component({
  selector: 'app-prayer',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
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
    return this.http.get<Prayer[]>('https://delperdang.pythonanywhere.com/api/v1/prayer/');
  }
}