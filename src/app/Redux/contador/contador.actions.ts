import { createAction, props } from '@ngrx/store';

// TYPES
export const  INCREMENTAR_TYPE = '[CONTADOR] Incrementar';
export const  DECREMENTAR_TYPE = '[CONTADOR] Decrementar';
export const  MULTIPLICAR_TYPE = '[CONTADOR] Multiplicar';
export const  DIVIDIR_TYPE     = '[CONTADOR] Dividir';
export const  RESET_TYPE       = '[CONTADOR] Reset';

// ACTIONS
export const Incrementar = createAction(INCREMENTAR_TYPE);
export const Decrementar = createAction(DECREMENTAR_TYPE);
export const Reset       = createAction(RESET_TYPE);
export const Multiplicar = createAction(
  MULTIPLICAR_TYPE,
  props<{ payload: number }>()
);
export const Dividir = createAction(
  DIVIDIR_TYPE,
  props<{ payload: number }>()
);

