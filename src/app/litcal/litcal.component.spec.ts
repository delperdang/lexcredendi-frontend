import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitcalComponent } from './litcal.component';

describe('LitcalComponent', () => {
  let component: LitcalComponent;
  let fixture: ComponentFixture<LitcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitcalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
