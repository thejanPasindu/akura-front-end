import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateDialogBoxComponent } from './deactivate-dialog-box.component';

describe('DeactivateDialogBoxComponent', () => {
  let component: DeactivateDialogBoxComponent;
  let fixture: ComponentFixture<DeactivateDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
