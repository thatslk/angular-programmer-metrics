import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOutlinedCardComponent } from './material-outlined-card.component';

describe('MaterialOutlinedCardComponent', () => {
  let component: MaterialOutlinedCardComponent;
  let fixture: ComponentFixture<MaterialOutlinedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialOutlinedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialOutlinedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
