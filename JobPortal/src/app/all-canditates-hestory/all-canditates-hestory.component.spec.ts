import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCanditatesHestoryComponent } from './all-canditates-hestory.component';

describe('AllCanditatesHestoryComponent', () => {
  let component: AllCanditatesHestoryComponent;
  let fixture: ComponentFixture<AllCanditatesHestoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCanditatesHestoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCanditatesHestoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
