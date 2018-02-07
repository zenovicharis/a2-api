import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { GoodreadsService } from './services/goodreads/goodreads.service';
import { SuggestionSingleComponent } from './components/suggestion-single/suggestion-single.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { 
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  // { 
  //   path: '**', 
  //   redirectTo: '/search',
  //   pathMatch: 'full' 
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SuggestionSingleComponent,
    BookDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
