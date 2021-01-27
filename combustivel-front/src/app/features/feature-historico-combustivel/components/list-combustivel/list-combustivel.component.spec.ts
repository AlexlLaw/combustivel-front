import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCombustivelComponent } from './list-combustivel.component';

describe('ListCombustivelComponent', () => {
  let component: ListCombustivelComponent;
  let fixture: ComponentFixture<ListCombustivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCombustivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
