import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonneComponent } from './edit-personne.component';

describe('EditPersonneComponent', () => {
  let component: EditPersonneComponent;
  let fixture: ComponentFixture<EditPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
