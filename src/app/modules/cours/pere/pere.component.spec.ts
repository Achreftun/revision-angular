import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PereComponent } from './pere.component';

describe('PereComponent', () => {
  let component: PereComponent;
  let fixture: ComponentFixture<PereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
