import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkslComponent } from './linksl.component';

describe('LinkslComponent', () => {
  let component: LinkslComponent;
  let fixture: ComponentFixture<LinkslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkslComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
