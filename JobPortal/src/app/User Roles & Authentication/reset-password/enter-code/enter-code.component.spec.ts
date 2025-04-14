import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCodeComponent } from './enter-code.component';

describe('EnterCodeComponent', () => {
  let component: EnterCodeComponent;
  let fixture: ComponentFixture<EnterCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
