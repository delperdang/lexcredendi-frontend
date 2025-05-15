import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';

interface Reading {
  id: number;
  date: string;
  first_reading: string;
  psalm: string;
  second_reading: string;
  gospel: string;
  feast_day: string;
  color: string;
  season: string;
}

@Component({
  selector: 'app-readings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './readings.component.html',
  styleUrl: './readings.component.css'
})
export class ReadingsComponent implements OnInit {
  readings: Reading[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchReadings().subscribe(readings => {
      this.readings = readings;
    });
  }

  fetchReadings(): Observable<Reading[]> {
    return this.http.get<Reading[]>('https://delperdang.pythonanywhere.com/readings/');
  }
}