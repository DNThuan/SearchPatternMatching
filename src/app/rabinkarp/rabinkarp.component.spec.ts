import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabinkarpComponent } from './rabinkarp.component';

describe('RabinkarpComponent', () => {
  let component: RabinkarpComponent;
  let fixture: ComponentFixture<RabinkarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabinkarpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RabinkarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
