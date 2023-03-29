import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoseramosComponent } from './joseramos.component';

describe('JoseramosComponent', () => {
  let component: JoseramosComponent;
  let fixture: ComponentFixture<JoseramosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoseramosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoseramosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
