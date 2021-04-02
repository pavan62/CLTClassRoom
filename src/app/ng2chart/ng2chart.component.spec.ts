import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2chartComponent } from './ng2chart.component';

describe('Ng2chartComponent', () => {
  let component: Ng2chartComponent;
  let fixture: ComponentFixture<Ng2chartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2chartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
