import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApologeticsComponent } from './apologetics.component';

describe('ApologeticsComponent', () => {
  let component: ApologeticsComponent;
  let fixture: ComponentFixture<ApologeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApologeticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApologeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
