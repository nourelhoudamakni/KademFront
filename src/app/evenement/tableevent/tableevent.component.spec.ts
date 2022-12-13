import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableeventComponent } from './tableevent.component';

describe('TableeventComponent', () => {
  let component: TableeventComponent;
  let fixture: ComponentFixture<TableeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
