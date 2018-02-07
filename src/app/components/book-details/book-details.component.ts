import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GoodreadsService} from '../../services/goodreads/goodreads.service';

import { Book } from "../../models/book";

@Component({
  selector: 'book-details',
  providers: [ GoodreadsService ],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private id;
  private sub;
  constructor(private goodreadsService:GoodreadsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
