import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesStyle } from './exemples-style.component';

describe('ExemplesStyle', () => {
  let component: ExemplesStyle;
  let fixture: ComponentFixture<ExemplesStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplesStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplesStyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
