import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesmatComponent } from './tablesmat.component';

describe('TablesmatComponent', () => {
  let component: TablesmatComponent;
  let fixture: ComponentFixture<TablesmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
