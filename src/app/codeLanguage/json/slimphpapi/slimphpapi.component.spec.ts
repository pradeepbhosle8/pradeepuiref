import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimphpapiComponent } from './slimphpapi.component';

describe('SlimphpapiComponent', () => {
  let component: SlimphpapiComponent;
  let fixture: ComponentFixture<SlimphpapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlimphpapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimphpapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
