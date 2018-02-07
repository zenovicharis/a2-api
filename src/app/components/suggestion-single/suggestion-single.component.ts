import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../../models/book";

@Component({
  selector: 'suggestion-single',
  templateUrl: './suggestion-single.component.html',
  styleUrls: ['./suggestion-single.component.css']
})
export class SuggestionSingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() book :Book

}
