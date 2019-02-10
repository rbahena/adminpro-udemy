import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

subscription: Subscription;

  constructor() {
    // Retry
    // this.regresaObservable().pipe(
    //   retry(4)
    // ).subscribe(
    //   numero => console.log('Subs ', numero),
    //   error => console.log('Error en el obs ', error),
    //   () => console.log('El observable termino!')
    // );

    // Map
    this.subscription =  this.regresaObservable().subscribe(
      numero => console.log('Subs ', numero),
      error => console.log('Error en el obs ', error),
      () => console.log('El observable termino!')
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any> {
    // Retry
    //   return new Observable(observer => {
    //     let contador = 0;
    //     let intervalo = setInterval(() => {
    //       contador += 1;
    //       observer.next(contador);
    //       if (contador === 3) {
    //         clearInterval(intervalo);
    //         observer.complete();
    //       }
    //       if (contador === 2) {
    //         clearInterval(intervalo);
    //         observer.error('Llamar soporte técnico');
    //       }
    //     }, 1000);

    //   });
    // }

    // Map
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000);

    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('Filter', valor, index);
        if ((valor % 2) === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })

    );
  }
}
