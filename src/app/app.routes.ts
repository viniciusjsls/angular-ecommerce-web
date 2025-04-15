import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductSearchComponent } from './modules/product-search/product-search.component';
import { ProfileComponent } from './modules/profile/profile.component';

export const routes: Routes = [
  {title: 'Home', path: '', component: HomeComponent},
  {title: 'Product Search', path: 'product-search', component: ProductSearchComponent},
  {title: 'Profile', path: 'profile', component: ProfileComponent},
];
