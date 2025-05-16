import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';

interface ApologeticsTopic {
  code: string;
  title: string;
  text: string;
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

  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.fetchApologeticsTopics().subscribe(topics => {
      this.apologeticsTopics = topics;
    });
  }

  fetchApologeticsTopics(): Observable<ApologeticsTopic[]> {
    return this.http.get<ApologeticsTopic[]>('https://delperdang.pythonanywhere.com/api/v1/apologetics/');
  }
}