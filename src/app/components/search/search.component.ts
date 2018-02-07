import { Component, OnInit } from '@angular/core';
import {GoodreadsService} from '../../services/goodreads/goodreads.service';

import { Book } from "../../models/book";

@Component({
  selector: 'search-bar',
  providers: [ GoodreadsService ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public classes = {};
  public suggestions = [];
  public loading = false;
  constructor(private goodreadsService:GoodreadsService) {
    this.classes = {
      "custom-border":false,
      "input-group-addon":true,
      "custom":true
    }
  }

  ngOnInit() {
    
  }

  search(value:string):void{
    this.loading = true;
    this.goodreadsService.search(value)
      .then((res) => {
        console.log(res["docs"]);
        this.suggestions = res["docs"].filter(e => e.cover_i != undefined).map((el) => new Book(el.title, el.cover_i));
        this.loading = false;
      }).catch((er) => {
        console.log(er);
        this.loading = false;
      });
  }

  focus():void{
    this.classes['custom-border'] = true;
  }

  unfocus():void{
    this.classes['custom-border'] = false;
  }


}
