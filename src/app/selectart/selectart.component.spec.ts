import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectartComponent } from './selectart.component';

describe('SelectartComponent', () => {
  let component: SelectartComponent;
  let fixture: ComponentFixture<SelectartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
