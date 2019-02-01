import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    // elemHTML.value = Number(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(Valor: number) {
    if (this.porcentaje >= 100 && Valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && Valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + Valor;
    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }
}
