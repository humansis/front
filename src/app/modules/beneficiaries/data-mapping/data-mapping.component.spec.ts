import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMappingComponent } from './data-mapping.component';

describe('HouseholdsDataMappingComponent', () => {
  let component: DataMappingComponent;
  let fixture: ComponentFixture<DataMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataMappingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
