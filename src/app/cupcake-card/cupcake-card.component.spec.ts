import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeCardComponent } from './cupcake-card.component';

describe('CupcakeCardComponent', () => {
  let component: CupcakeCardComponent;
  let fixture: ComponentFixture<CupcakeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupcakeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupcakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
