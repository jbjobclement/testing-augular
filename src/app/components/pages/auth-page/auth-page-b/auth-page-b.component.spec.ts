import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageBComponent } from './auth-page-b.component';

describe('AuthPageBComponent', () => {
  let component: AuthPageBComponent;
  let fixture: ComponentFixture<AuthPageBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
