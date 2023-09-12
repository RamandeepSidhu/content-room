import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieAcceptanceComponent } from './cookie-acceptance.component';

describe('CookieAcceptanceComponent', () => {
  let component: CookieAcceptanceComponent;
  let fixture: ComponentFixture<CookieAcceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieAcceptanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
