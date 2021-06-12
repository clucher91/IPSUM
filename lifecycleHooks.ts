`
Problema 1: Es necesario agregar a la siguiente fracción de código, una lógica que
verifique que el usuario completó el formulario, para poder mostrarle en el DOM, un
mensaje que indique que lo ha hecho correctamente.
`

class​ Component {
    public​ data: ​ Array​ <Object​>;
    async​ ​ constructor​ (){
        let​ info = await​ this​.getSomeData('http://localhost:8080/api/users'​ )
        info.map((el) => {
            el.is_form_completed = ​ false​ ;
            return​ el;
        })
        this​.data = info
    }

    public getSomeData(url_api) => {
        let​ res = fetch(url_api)
        return​ res
    }
    
    // Angular
    onSubmit(): void {
    {
        if(this.data.every((i) => { return i.is_form_completed === true }))
            alert('todos los usuarios completaron su formulario');
        else
            alert('faltan formularios por confirmar');
    }
}
`
Problema 2: La siguiente fracción de código requiere suscribirse a un evento, el cual es
emitido cuando hay un error, y despliega una pantalla de error. Puede utilizar cualquier
patrón de eventos de Javascript (Observables, Promises o Async/await), así como el
nombre del evento en cuestión puede definirlo arbitrariamente igualmente. Recuerde
además, en el ciclo de vida correspondiente eliminar dicha suscripciones.
`

import { Component, OnDestroy , OnInit} from '@angular/core'; // example import angular core
import { UserService } from './services/userServies '; // example route of services
import { ErrorService } from './services/userServies '; // example route of services
import { map } from 'rxjs/operators';
import { ReplaySubject , takeUntil } from 'rxjs';

export class​ MyComponent implements OnInit, OnDestroy {
    public​ data: Array​ <Object​>;
    private isError$: ReplaySubject<boolean> = new ReplaySubject(1);
    someError: Subscription;

    constructor(
        private service: UserService,
        private errorService: ErrorService
    ) {}

    ngOnInit() {
        this.getAll()
        this.showSomeError()
	}

    public  getAll(): void {
        this.service.all().subscribe(res => {
            this.data = res.map(el =>{ return el.is_form_completed = ​false​})
        })
    }

    public showSomeError() {
        this.someError = this.errorService
          .getSomeError()
          .pipe(takeUntil(this.isError$))
          .subscribe(err => window.alert(`Problem Here: ${err}`));
      }

    ngOnDestroy() {
        this.isError$.next(true);
        this.isError$.complete();
    }
}



