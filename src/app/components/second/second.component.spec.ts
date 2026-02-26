import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second } from './second.component';

describe('Second', () => {
  let component: Second;
  let fixture: ComponentFixture<Second>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Second]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Second);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
