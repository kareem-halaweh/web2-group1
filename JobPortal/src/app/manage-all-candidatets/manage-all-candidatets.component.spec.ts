import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllCandidatetsComponent } from './manage-all-candidatets.component';

describe('ManageAllCandidatetsComponent', () => {
  let component: ManageAllCandidatetsComponent;
  let fixture: ComponentFixture<ManageAllCandidatetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAllCandidatetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAllCandidatetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
