import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsapiComponent } from './nodejsapi.component';

describe('NodejsapiComponent', () => {
  let component: NodejsapiComponent;
  let fixture: ComponentFixture<NodejsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodejsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
