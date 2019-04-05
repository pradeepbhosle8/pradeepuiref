import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GulpjsComponent } from './gulpjs.component';

describe('GulpjsComponent', () => {
  let component: GulpjsComponent;
  let fixture: ComponentFixture<GulpjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GulpjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GulpjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
