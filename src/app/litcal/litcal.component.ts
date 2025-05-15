import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';

interface LiturgicalCalendarEntry {
  id: number;
  date: string;
  name: string;
  rank: string;
  color: string;
  season: string;
}

@Component({
  selector: 'app-litcal',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './litcal.component.html',
  styleUrl: './litcal.component.css'
})
export class LitcalComponent implements OnInit {
  liturgicalCalendar: LiturgicalCalendarEntry[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchLiturgicalCalendar().subscribe(calendar => {
      this.liturgicalCalendar = calendar;
    });
  }

  fetchLiturgicalCalendar(): Observable<LiturgicalCalendarEntry[]> {
    return this.http.get<LiturgicalCalendarEntry[]>('https://delperdang.pythonanywhere.com/litcal/');
  }
}