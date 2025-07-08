import { ActionReducerMap } from "@ngrx/store";
import { ISharedStoreState, sharedStoreReducer } from "../shared/store/shared-store.reducer";

export enum StateReducers {
  Shared,
}

export interface IState {
  [StateReducers.Shared]: ISharedStoreState;
}

export const stateReducers: ActionReducerMap<IState> = {
  [StateReducers.Shared]: sharedStoreReducer,
};