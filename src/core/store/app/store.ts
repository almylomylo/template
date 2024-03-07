import {AppState} from './types';
import {AppDomain} from './domain';

import {initializeApp, setActiveNav, setError, setMainMenu} from './events';

const initialState: AppState = {
  mainMenu: null,
  error: null,
  activeNav: null,
};

export const $appStore = AppDomain.store<AppState>(initialState)
  .on(setActiveNav, (state, value) => {
    return {
      ...state,
      activeNav: value,
    };
  })
  .on(setMainMenu, (state, value) => {
    return {
      ...state,
      mainMenu: value,
    };
  })
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
