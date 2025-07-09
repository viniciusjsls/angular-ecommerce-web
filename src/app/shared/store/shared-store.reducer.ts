import { createReducer, on } from "@ngrx/store";
import { initializeConfig } from "./shared-store.actions";

export interface ISharedConfig {
  productsUrl: string,
}

export interface ISharedStoreState {
  config: ISharedConfig | null,
}

const initialState: () => ISharedStoreState = () => {
  const state: ISharedStoreState = {
    config: null
  };
  return state;
};

export const sharedStoreReducer = createReducer(
  initialState(),
  on(initializeConfig, (state, action) => initializeConfigState(state, action)),
);

export function initializeConfigState(state: ISharedStoreState, config: ISharedConfig): ISharedStoreState {
  return {
    ...state,
    config
  };
}