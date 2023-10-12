import { createReducer, on } from '@ngrx/store';
import * as editorActions  from './contador.actions';

export const initialState: number = 10;

const contadorReducer = createReducer(
  initialState,
  on(
    editorActions.Incrementar,
    (state) => state + 1
  ),
  on(
    editorActions.Decrementar,
    (state) => state - 1
  ),
  on(
    editorActions.Multiplicar,
    (state,{payload}) => state * payload
  ),
  on(
    editorActions.Dividir,
    (state, {payload }) => state / payload
  ),
  on(
    editorActions.Reset,
    () => initialState
  )
);

export function reducer(state: number | undefined, action: any) {
  return contadorReducer(state, action);
}
