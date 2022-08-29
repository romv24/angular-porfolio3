import { ComponentFixture, TestBed } from '@angular/core/testing';

import { paginausuarioComponent } from '../pagina-usuario/pagina-usuario.component';

describe('paginausuarioComponent', () => {
  let component: paginausuarioComponent;
  let fixture: ComponentFixture<paginausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ paginausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(paginausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
