import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvaibleComponent } from './not-avaible.component';

describe('NotAvaibleComponent', () => {
  let component: NotAvaibleComponent;
  let fixture: ComponentFixture<NotAvaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAvaibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAvaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
