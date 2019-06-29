import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'dash'`, async(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.titi).toEqual('ik');
}));

it('should return sum of variables', async(() => {
  fixture = TestBed.createComponent(ProductsComponent);
  component = fixture.debugElement.componentInstance;
  expect(component.add(4,4)).toEqual(8);
}))

it('should return random object', async(() => {
  let mockData = {
    a: 'thoufeeq',
    b: 'ahamed',
    age: 27
  }
  fixture = TestBed.createComponent(ProductsComponent);
  component = fixture.debugElement.componentInstance;
  expect(component.random()).toEqual(mockData);
}))
});
