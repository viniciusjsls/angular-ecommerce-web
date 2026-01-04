import { Injectable } from "@angular/core";
import { map, Observable, of, retry, takeUntil } from "rxjs";
import { Destroyable } from "../util/destroyable";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { selectConfigData } from "../store/shared-store.selectors";
import { IState } from "../../store/state";
import { Product } from "../models/product";

export abstract class ProductsService extends Destroyable {
  abstract listProducts(searchString: string): Observable<Product[]>;
  abstract getAvailableProductsCount(): Observable<number>;
}

@Injectable()
export class RealProductsService extends ProductsService {
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
          return response;
        }),
        retry(2)
      );
  }

  public getAvailableProductsCount(): Observable<number> {
    return this.httpClient
      .get<number>(this.productsUrl)
      .pipe(
        map((response) => {
          return response;
        }),
        retry(2)
      );
  }
}

@Injectable()
export class MockProductsService extends ProductsService {
  public listProducts(
    searchString: string
  ): Observable<Product[]> {
    return of([
            new Product('123', 'Random Name'),
            new Product('321', 'Another Name')
          ]);
  }

  public getAvailableProductsCount(): Observable<number> {
    return of(12378);
  }
}