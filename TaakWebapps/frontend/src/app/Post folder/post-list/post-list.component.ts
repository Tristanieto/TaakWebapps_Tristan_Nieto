import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import { PostDataService } from '../post-data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public filterPostName: string;
  public filterPost$ = new Subject<String>();

  private _posts : Post[];

  constructor(private _postDataService: PostDataService) {

    this.filterPost$.pipe(
      distinctUntilChanged(),
      map(val => val.toLowerCase())
    )
    .subscribe(val => (this.filterPostName = val));

   }

  ngOnInit() {
    this._postDataService.posts.subscribe(items => this._posts = items);

  }

  get posts(){
    return this._posts;
  }

  

}
