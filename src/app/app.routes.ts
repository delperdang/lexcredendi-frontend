import { Routes } from '@angular/router';
import { ApologeticsComponent } from './apologetics/apologetics.component';
import { ArtComponent } from './art/art.component';
import { BibleComponent } from './bible/bible.component';
import { CatechismComponent } from './catechism/catechism.component';
import { DoctrineComponent } from './doctrine/doctrine.component';
import { LitcalComponent } from './litcal/litcal.component';
import { MeditationComponent } from './meditation/meditation.component';
import { PrayerComponent } from './prayer/prayer.component';
import { ReadingsComponent } from './readings/readings.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '#', component: HomeComponent },
  { path: '#/apologetics', component: ApologeticsComponent },
  { path: '#/art', component: ArtComponent },
  { path: '#/bible', component: BibleComponent },
  { path: '#/catechism', component: CatechismComponent },
  { path: '#/doctrine', component: DoctrineComponent },
  { path: '#/litcal', component: LitcalComponent },
  { path: '#/meditation', component: MeditationComponent },
  { path: '#/prayer', component: PrayerComponent },
  { path: '#/readings', component: ReadingsComponent },
  { path: '**', redirectTo: '#' },
];