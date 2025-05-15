import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';

interface BibleVerse {
  id: number;
  book: string;
  chapter: number;
  verse: number;
  content: string;
}

@Component({
  selector: 'app-bible',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './bible.component.html',
  styleUrl: './bible.component.css'
})
export class BibleComponent implements OnInit {
  bibleVerses: BibleVerse[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBibleVerses().subscribe(verses => {
      this.bibleVerses = verses;
    });
  }

  fetchBibleVerses(): Observable<BibleVerse[]> {
    return this.http.get<BibleVerse[]>('https://delperdang.pythonanywhere.com/api/v1/bible/');
  }
}