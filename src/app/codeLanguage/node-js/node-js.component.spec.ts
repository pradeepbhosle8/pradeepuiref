import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJSComponent } from './node-js.component';

describe('NodeJSComponent', () => {
  let component: NodeJSComponent;
  let fixture: ComponentFixture<NodeJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
