import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';

interface BiblePassage {
  code: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-bible',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './bible.component.html',
  styleUrl: './bible.component.css'
})
export class BibleComponent implements OnInit {
  biblePassages: BiblePassage[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBiblePassages().subscribe(verses => {
      this.biblePassages = verses;
    });
  }

  fetchBiblePassages(): Observable<BiblePassage[]> {
    return this.http.get<BiblePassage[]>('https://delperdang.pythonanywhere.com/api/v1/bible/');
  }
}