import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaftalikComponent } from './haftalik.component';

describe('HaftalikComponent', () => {
  let component: HaftalikComponent;
  let fixture: ComponentFixture<HaftalikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaftalikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaftalikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
