import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidFilterComponent } from './sid-filter.component';

describe('SidFilterComponent', () => {
  let component: SidFilterComponent;
  let fixture: ComponentFixture<SidFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
