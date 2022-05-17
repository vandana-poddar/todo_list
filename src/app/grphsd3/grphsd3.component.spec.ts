import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grphsd3Component } from './grphsd3.component';

describe('Grphsd3Component', () => {
  let component: Grphsd3Component;
  let fixture: ComponentFixture<Grphsd3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grphsd3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grphsd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
