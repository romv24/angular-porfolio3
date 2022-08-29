import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltausuarioComponent } from './alta-usuario.component';

describe('AltausuarioComponent', () => {
  let component: AltausuarioComponent;
  let fixture: ComponentFixture<AltausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
