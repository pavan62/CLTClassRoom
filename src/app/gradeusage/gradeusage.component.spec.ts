import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeusageComponent } from './gradeusage.component';

describe('GradeusageComponent', () => {
  let component: GradeusageComponent;
  let fixture: ComponentFixture<GradeusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeusageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
