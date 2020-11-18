import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrV2Component } from './registr-v2.component';

describe('RegistrV2Component', () => {
  let component: RegistrV2Component;
  let fixture: ComponentFixture<RegistrV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
