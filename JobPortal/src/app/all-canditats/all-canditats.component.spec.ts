import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCanditatsComponent } from './all-canditats.component';

describe('AllCanditatsComponent', () => {
  let component: AllCanditatsComponent;
  let fixture: ComponentFixture<AllCanditatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCanditatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCanditatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
