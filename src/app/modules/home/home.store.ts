import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { HomeFormService } from "./home.form.service";

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

  form = this._homeFormService.form;
  
  readonly vm$ = this.select(
    this.state$,
    (state) => ({
      productsAvailableCount: state.productsAvailableCount
    })
  );

  constructor(
    private _homeFormService: HomeFormService
  ) {
    super(initialState());


  }
}