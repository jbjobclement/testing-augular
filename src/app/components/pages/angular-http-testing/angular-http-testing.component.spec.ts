import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHttpTestingComponent } from './angular-http-testing.component';

describe('AngularHttpTestingComponent', () => {
  let component: AngularHttpTestingComponent;
  let fixture: ComponentFixture<AngularHttpTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHttpTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularHttpTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
