import { createSelector } from "@ngrx/store";
import { ISharedStoreState } from "./shared-store.reducer";
import { IState, StateReducers } from "../../store/state";

export const selectSharedState = (state: IState) => state[StateReducers.Shared];

export const selectConfigData = createSelector(
  selectSharedState,
  (state: ISharedStoreState) => state?.config
);