import { createReducer, on } from '@ngrx/store';
import * as editorActions from '../editor/editor.actions';

const initialState: string = 'Ingrese un nombre';

const editorReducer = createReducer(
  initialState,
  on(
    editorActions.cambiarEditor, 
    (state, { payload }) => state = payload)
);

export function reducer(state: string | undefined, action: any) {
  return editorReducer(state, action);
}
