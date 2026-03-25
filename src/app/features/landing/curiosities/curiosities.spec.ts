import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curiosities } from './curiosities';

describe('Curiosities', () => {
  let component: Curiosities;
  let fixture: ComponentFixture<Curiosities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Curiosities],
    }).compileComponents();

    fixture = TestBed.createComponent(Curiosities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
