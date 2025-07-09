import { Injectable } from "@angular/core";
import { ISharedConfig } from "../store/shared-store.reducer";
import { Store } from "@ngrx/store";
import { initializeConfig } from "../store/shared-store.actions";

@Injectable({
  providedIn: 'root',
})
export class SharedFacade {
  constructor(private store: Store) {}

  setConfigData(config: ISharedConfig): void {
    this.store.dispatch(initializeConfig(config));
  }
}