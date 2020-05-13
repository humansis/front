import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeAreaComponent } from './administrative-area.component';

describe('AdministrativeAreaComponent', () => {
  let component: AdministrativeAreaComponent;
  let fixture: ComponentFixture<AdministrativeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativeAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
