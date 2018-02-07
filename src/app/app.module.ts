import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { GoodreadsService } from './services/goodreads/goodreads.service';
import { SuggestionSingleComponent } from './components/suggestion-single/suggestion-single.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SuggestionSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
