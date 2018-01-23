import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeHomeComponent } from './empoyee-home.component';

describe('EmpoyeeHomeComponent', () => {
  let component: EmpoyeeHomeComponent;
  let fixture: ComponentFixture<EmpoyeeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpoyeeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
