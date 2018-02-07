import { Component } from '@angular/core';
import {SearchComponent} from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
