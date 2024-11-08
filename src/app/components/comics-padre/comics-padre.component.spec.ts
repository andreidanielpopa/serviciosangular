import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsPadreComponent } from './comics-padre.component';

describe('ComicsPadreComponent', () => {
  let component: ComicsPadreComponent;
  let fixture: ComponentFixture<ComicsPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
