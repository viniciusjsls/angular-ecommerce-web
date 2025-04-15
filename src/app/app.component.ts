import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from './modules/app-navbar/app-navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppNavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ecommerce-web';
}
