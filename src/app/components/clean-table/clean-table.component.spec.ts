import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanTableComponent } from './clean-table.component';
import { ClientDataSource } from '../../core/datasource/client-data-source';

describe('CleanTableComponent', () => {
  let component: CleanTableComponent;
  let fixture: ComponentFixture<CleanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CleanTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanTableComponent);
    component = fixture.componentInstance;
    component.dataSource = new ClientDataSource<any>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
