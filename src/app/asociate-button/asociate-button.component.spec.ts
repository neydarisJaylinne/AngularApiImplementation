import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociateButtonComponent } from './asociate-button.component';

describe('AsociateButtonComponent', () => {
  let component: AsociateButtonComponent;
  let fixture: ComponentFixture<AsociateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsociateButtonComponent]
    });
    fixture = TestBed.createComponent(AsociateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
