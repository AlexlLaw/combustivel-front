import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPrecoCombustivelComponent } from './media-preco-combustivel.component';

describe('MediaPrecoCombustivelComponent', () => {
  let component: MediaPrecoCombustivelComponent;
  let fixture: ComponentFixture<MediaPrecoCombustivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPrecoCombustivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPrecoCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
