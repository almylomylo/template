import {createEvent, createStore} from 'effector';

export const setNavIsOpen = createEvent<boolean>();
export const $navIsOpen = createStore(false).on(setNavIsOpen, (_, isOpen) => isOpen);
