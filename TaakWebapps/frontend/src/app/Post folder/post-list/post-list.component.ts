import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private _posts : Post[];

  constructor(private _postDataService: PostDataService) { }

  ngOnInit() {
    this._postDataService.posts.subscribe(items => this._posts = items);

  }

  get posts(){
    return this._posts;
  }

}
