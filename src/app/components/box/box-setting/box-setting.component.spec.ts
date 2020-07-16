import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSettingComponent } from './box-setting.component';
import { UppercaseFirstPipe } from '../../../shared/pipes/uppercase-first.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('BoxSettingComponent', () => {
  let component: BoxSettingComponent;
  let fixture: ComponentFixture<BoxSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxSettingComponent, UppercaseFirstPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSettingComponent);
    component = fixture.componentInstance;
    component.info = { icon: 'group', color: 'green', title: 'test', ref: '' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
