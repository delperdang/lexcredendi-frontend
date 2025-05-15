import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApologeticsTopic {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-apologetics',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  templateUrl: './apologetics.component.html',
  styleUrl: './apologetics.component.css'
})
export class ApologeticsComponent implements OnInit {
  apologeticsTopics: ApologeticsTopic[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchApologeticsTopics().subscribe(topics => {
      this.apologeticsTopics = topics;
    });
  }

  fetchApologeticsTopics(): Observable<ApologeticsTopic[]> {
    return this.http.get<ApologeticsTopic[]>('https://delperdang.pythonanywhere.com/api/v1/apologetics/');
  }
}