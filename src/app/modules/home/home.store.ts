import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

export interface HomeStoreState {}

const initialState: () => HomeStoreState = () => {
  const state: HomeStoreState = {};
  return state;
};

@Injectable()
export class HomeStore extends ComponentStore<HomeStoreState> {

  constructor() {
    super(initialState());
  }
}