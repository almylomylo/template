import {AppDomain} from './domain';
import {MenuType} from './types';
export const setError = AppDomain.createEvent<string>();

export const initializeApp = AppDomain.createEvent<MenuType[]>();
