import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageAComponent } from './auth-page-a.component';

describe('AuthPageAComponent', () => {
  let component: AuthPageAComponent;
  let fixture: ComponentFixture<AuthPageAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
