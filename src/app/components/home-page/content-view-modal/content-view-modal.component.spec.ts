import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewModalComponent } from './content-view-modal.component';

describe('ContentViewModalComponent', () => {
  let component: ContentViewModalComponent;
  let fixture: ComponentFixture<ContentViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
