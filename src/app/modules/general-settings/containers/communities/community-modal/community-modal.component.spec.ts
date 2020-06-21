import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityModalComponent } from './community-modal.component';

describe('CommunityModalComponent', () => {
  let component: CommunityModalComponent;
  let fixture: ComponentFixture<CommunityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
