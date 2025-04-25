import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

export interface HomeStoreState {
  productsAvailableCount: number,
}

const initialState: () => HomeStoreState = () => {
  const state: HomeStoreState = {
    productsAvailableCount: 0
  };
  return state;
};

@Injectable()
export class HomeStore extends ComponentStore<HomeStoreState> {

  readonly vm$ = this.select(
    this.state$,
    (state) => ({
      productsAvailableCount: state.productsAvailableCount
    })
  );

  constructor() {
    super(initialState());


  }
}