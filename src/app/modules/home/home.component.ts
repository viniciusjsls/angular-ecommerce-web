import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HomeStore } from './home.store';
import { CommonModule } from '@angular/common';
import { HomeFormService } from './home.form.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    HomeStore,
    HomeFormService
  ]
})
export class HomeComponent {
  
  vm$ = this._homeStore.vm$;

  form = this._homeStore.form;

  constructor(
    private _homeStore: HomeStore
  ) {
    
  }
}
