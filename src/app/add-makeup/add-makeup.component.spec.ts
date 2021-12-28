import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMakeupComponent } from './add-makeup.component';



describe('AddMakeupComponent', () => {
  let component: AddMakeupComponent;
  let fixture: ComponentFixture<AddMakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMakeupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
