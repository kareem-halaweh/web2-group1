import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobComponent } from './all-job.component';

describe('AllJobComponent', () => {
  let component: AllJobComponent;
  let fixture: ComponentFixture<AllJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
