import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassswordSuccessComponent } from './reset-passsword-success.component';

describe('ResetPassswordSuccessComponent', () => {
  let component: ResetPassswordSuccessComponent;
  let fixture: ComponentFixture<ResetPassswordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassswordSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPassswordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
