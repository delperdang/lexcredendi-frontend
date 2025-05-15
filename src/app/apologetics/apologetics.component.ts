import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';
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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchApologeticsTopics().subscribe(topics => {
      console.log('Data received from API:', topics);
      this.apologeticsTopics = topics;
      this.cdr.detectChanges();
      console.log('apologeticsTopics after assignment:', this.apologeticsTopics);
    }, error => {
      console.error('Error fetching data:', error);
    });
  }

  fetchApologeticsTopics(): Observable<ApologeticsTopic[]> {
    return this.http.get<ApologeticsTopic[]>('https://delperdang.pythonanywhere.com/api/v1/apologetics/');
  }
}