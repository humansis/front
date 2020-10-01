import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdDetailComponent } from 'src/app/modules/beneficiaries/containers/household-detail/household-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HouseholdsService } from 'src/app/core/api/households.service';
import { HouseholdsMockService } from 'src/app/core/api/mock/households-mock.service';

describe('HouseholdDetailComponent', () => {
  let component: HouseholdDetailComponent;
  let fixture: ComponentFixture<HouseholdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: HouseholdsService, useClass: HouseholdsMockService }],
      declarations: [HouseholdDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
