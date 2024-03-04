import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegbookComponent } from './regbook.component';

describe('RegbookComponent', () => {
  let component: RegbookComponent;
  let fixture: ComponentFixture<RegbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
