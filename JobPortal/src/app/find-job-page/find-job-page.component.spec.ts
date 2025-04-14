import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobPageComponent } from './find-job-page.component';

describe('FindJobPageComponent', () => {
  let component: FindJobPageComponent;
  let fixture: ComponentFixture<FindJobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindJobPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
