import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractProgramsComponent } from './extract-programs.component';

describe('ExtractProgramsComponent', () => {
  let component: ExtractProgramsComponent;
  let fixture: ComponentFixture<ExtractProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
