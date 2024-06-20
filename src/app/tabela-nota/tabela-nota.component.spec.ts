import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNotaComponent } from './tabela-nota.component';

describe('TabelaNotaComponent', () => {
  let component: TabelaNotaComponent;
  let fixture: ComponentFixture<TabelaNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
