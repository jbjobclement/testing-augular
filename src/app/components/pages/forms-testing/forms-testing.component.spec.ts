import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTestingComponent } from './forms-testing.component';

describe('FormsTestingComponent', () => {
  let component: FormsTestingComponent;
  let fixture: ComponentFixture<FormsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
