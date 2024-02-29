import {AppState} from './types';
import {AppDomain} from './domain';

import {initializeApp, setError} from './events';

const initialState: AppState = {
  nav: null,
  error: null,
};

export const $appStore = AppDomain.store<AppState>(initialState)
  .on(setError, (state, value) => {
    return {
      ...state,
      error: value,
    };
  })
  .on(initializeApp, (state, value) => {
    return {
      ...state,
      nav: value,
    };
  });

// $appStore.watch((e) => console.log(e));

export default $appStore;
