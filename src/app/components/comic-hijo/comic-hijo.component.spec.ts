import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicHijoComponent } from './comic-hijo.component';

describe('ComicHijoComponent', () => {
  let component: ComicHijoComponent;
  let fixture: ComponentFixture<ComicHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
