import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsComponent } from './fils.component';

describe('FilsComponent', () => {
  let component: FilsComponent;
  let fixture: ComponentFixture<FilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
