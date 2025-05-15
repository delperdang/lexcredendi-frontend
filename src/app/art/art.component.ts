import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ArtImage {
  id: number;
  title: string;
  artist: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent implements OnInit {
  artImages: ArtImage[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchArtImages().subscribe(images => {
      this.artImages = images;
    });
  }

  fetchArtImages(): Observable<ArtImage[]> {
    return this.http.get<ArtImage[]>('https://delperdang.pythonanywhere.com/art/');
  }
}