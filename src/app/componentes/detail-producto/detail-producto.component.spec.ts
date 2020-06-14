import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductoComponent } from './detail-producto.component';

describe('DetailProductoComponent', () => {
  let component: DetailProductoComponent;
  let fixture: ComponentFixture<DetailProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
