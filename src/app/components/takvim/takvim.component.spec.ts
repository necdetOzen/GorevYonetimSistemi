import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakvimComponent } from './takvim.component';

describe('TakvimComponent', () => {
  let component: TakvimComponent;
  let fixture: ComponentFixture<TakvimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakvimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakvimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
