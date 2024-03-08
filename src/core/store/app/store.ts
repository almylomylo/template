import { AppState } from "./types";
import { AppDomain } from "./domain";

import {
  initializeApp,
  setActiveNav,
  setError,
  setMainMenu,
  setFooterAbout,
  setFooterHelp,
} from "./events";

const initialState: AppState = {
  mainMenu: null,
  error: null,
  activeNav: null,
  footerAbout: null,
  footerHelp: null,
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
  })
  .on(setFooterAbout, (state, value) => {
    return {
      ...state,
      footerAbout: value,
    };
  })
  .on(setFooterHelp, (state, value) => {
    return {
      ...state,
      footerHelp: value,
    };
  });

// $appStore.watch((e) => console.log(e));

export default $appStore;
