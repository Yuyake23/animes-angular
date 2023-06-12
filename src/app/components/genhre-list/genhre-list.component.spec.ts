import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenhreListComponent } from './genhre-list.component';

describe('GenhreListComponent', () => {
  let component: GenhreListComponent;
  let fixture: ComponentFixture<GenhreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenhreListComponent]
    });
    fixture = TestBed.createComponent(GenhreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
