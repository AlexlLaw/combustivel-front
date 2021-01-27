import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCombustivelComponent } from './historico-combustivel.component';

describe('HistoricoCombustivelComponent', () => {
  let component: HistoricoCombustivelComponent;
  let fixture: ComponentFixture<HistoricoCombustivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoCombustivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
