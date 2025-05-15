import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';

interface DoctrineTopic {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-doctrine',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './doctrine.component.html',
  styleUrl: './doctrine.component.css'
})
export class DoctrineComponent implements OnInit {
  doctrineTopics: DoctrineTopic[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDoctrineTopics().subscribe(topics => {
      this.doctrineTopics = topics;
    });
  }

  fetchDoctrineTopics(): Observable<DoctrineTopic[]> {
    return this.http.get<DoctrineTopic[]>('https://delperdang.pythonanywhere.com/doctrine/');
  }
}