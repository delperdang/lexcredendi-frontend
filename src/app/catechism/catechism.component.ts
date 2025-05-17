import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';

interface CatechismTopic {
  code: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-catechism',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  templateUrl: './catechism.component.html',
  styleUrl: './catechism.component.css'
})
export class CatechismComponent implements OnInit {
  catechismTopics: CatechismTopic[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCatechismTopics().subscribe(topics => {
      this.catechismTopics = topics;
    });
  }

  fetchCatechismTopics(): Observable<CatechismTopic[]> {
    return this.http.get<CatechismTopic[]>('https://delperdang.pythonanywhere.com/api/v1/catechism/');
  }
}