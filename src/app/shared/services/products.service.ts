import { Injectable } from "@angular/core";
import { map, Observable, retry, takeUntil } from "rxjs";
import { Destroyable } from "../util/destroyable";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { selectConfigData } from "../store/shared-store.selectors";
import { IState } from "../../store/state";
import { Product } from "../models/product";

@Injectable()
export class ProductsService extends Destroyable {
  private productsUrl: string = '';

  constructor(private httpClient: HttpClient, private store: Store<IState>) {
    super();
    this.store
      .select(selectConfigData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((configData) => {
        if (configData?.productsUrl) {
          this.productsUrl = configData.productsUrl;
        }
      });
  }

  public listProducts(
    searchString: string
  ): Observable<Product[]> {
    const params = new HttpParams()
      .set('searchString', searchString);

    return this.httpClient
      .get<Product[]>(this.productsUrl, {
        params: params,
      })
      .pipe(
        map((response) => {
          return [
            new Product('123', 'Random Name'),
            new Product('321', 'Another Name')
          ];
        }),
        retry(2)
      );
  }
}