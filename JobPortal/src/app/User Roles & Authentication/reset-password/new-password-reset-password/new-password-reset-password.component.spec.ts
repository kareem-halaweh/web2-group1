import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordResetPasswordComponent } from './new-password-reset-password.component';

describe('NewPasswordResetPasswordComponent', () => {
  let component: NewPasswordResetPasswordComponent;
  let fixture: ComponentFixture<NewPasswordResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPasswordResetPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPasswordResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
