import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctrineComponent } from './doctrine.component';

describe('DoctrineComponent', () => {
  let component: DoctrineComponent;
  let fixture: ComponentFixture<DoctrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctrineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
