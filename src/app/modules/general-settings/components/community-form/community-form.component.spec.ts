import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFormComponent } from './community-form.component';

describe('CommunityFormComponent', () => {
  let component: CommunityFormComponent;
  let fixture: ComponentFixture<CommunityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
