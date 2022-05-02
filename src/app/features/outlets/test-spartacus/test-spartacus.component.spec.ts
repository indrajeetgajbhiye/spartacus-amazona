import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpartacusComponent } from './test-spartacus.component';

describe('TestSpartacusComponent', () => {
  let component: TestSpartacusComponent;
  let fixture: ComponentFixture<TestSpartacusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSpartacusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpartacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
