import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformacoesComponent } from './editar-informacoes.component';

describe('EditarInformacoesComponent', () => {
  let component: EditarInformacoesComponent;
  let fixture: ComponentFixture<EditarInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
