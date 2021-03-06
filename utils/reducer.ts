import { stateTypes, actionType } from '../interfaces';

export const initialState: stateTypes = {
  authState: 'unauthenticated',
  user: null,
  session: null,
  credentials: null
}

export const initReducer = (state: stateTypes = initialState) => {
    return state;
}

const copyState = (state: stateTypes) => {
  return JSON.parse(JSON.stringify(state));
}

export const appReducer = (state: stateTypes, action: actionType): stateTypes => {
  let newState = copyState(state);
  switch (action.type) {
    case 'setAuthState':
      newState.authState = action.value;
      return newState;
    case 'setUser':
      newState.user = action.value;
      return newState
    case 'setSession':
      newState.session = action.value;
      return newState
    case 'setCredentials':
      newState.credentials = action.value
      return newState
    default:
      return state;
  }
}
