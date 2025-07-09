import { createAction, props } from "@ngrx/store";
import { ISharedConfig } from "./shared-store.reducer";

const actionConfig = '[Config]';

export const initializeConfig = createAction(`${actionConfig} Initialize Config`, props<ISharedConfig>());