import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsDialogComponent } from './city-details-dialog.component';

describe('CityDetailsDialogComponent', () => {
  let component: CityDetailsDialogComponent;
  let fixture: ComponentFixture<CityDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
