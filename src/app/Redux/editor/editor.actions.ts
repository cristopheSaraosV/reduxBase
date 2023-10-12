import { createAction, props } from '@ngrx/store';

// TYPES
export const  EDITOR_TYPE = '[EDITOR] Editar nombre';

// ACTIONS
export const cambiarEditor = createAction(
    EDITOR_TYPE,
    props<{ payload: string }>()
  );
  
  