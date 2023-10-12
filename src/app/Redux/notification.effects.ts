import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ContadorActions from '../Redux/contador/contador.actions'
import Swal from 'sweetalert2';

@Injectable()
export class notificationEffect {
  constructor(private actions$: Actions) {}

  resetFormEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContadorActions.Reset),
      mergeMap(() => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Formulario limpio',
            showConfirmButton: false,
            timer: 1000
          }) 
        return of();
      }),
      catchError((error) => of(error)) 
    )
  );



}
