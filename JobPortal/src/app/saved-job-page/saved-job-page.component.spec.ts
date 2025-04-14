import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobPageComponent } from './saved-job-page.component';

describe('SavedJobPageComponent', () => {
  let component: SavedJobPageComponent;
  let fixture: ComponentFixture<SavedJobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedJobPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
