import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lampe } from './lampe.component';

describe('Lampe', () => {
  let component: Lampe;
  let fixture: ComponentFixture<Lampe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lampe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lampe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
