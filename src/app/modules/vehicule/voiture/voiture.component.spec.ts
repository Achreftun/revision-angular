import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureComponent } from './voiture.component';

describe('VoitureComponent', () => {
  let component: VoitureComponent;
  let fixture: ComponentFixture<VoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
