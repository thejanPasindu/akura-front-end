import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDetailsForSponsorComponent } from './sch-details-for-sponsor.component';

describe('SchDetailsForSponsorComponent', () => {
  let component: SchDetailsForSponsorComponent;
  let fixture: ComponentFixture<SchDetailsForSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchDetailsForSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchDetailsForSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
