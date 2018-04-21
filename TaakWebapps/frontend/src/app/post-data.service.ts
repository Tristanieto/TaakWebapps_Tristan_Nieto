import { Injectable } from '@angular/core';
import { Post } from './post/post.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class PostDataService {

  private readonly _appUrl = 'API/posts/';

  constructor(private http: HttpClient) {
  }

  get posts(): Observable<Post[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Post[] =>
          list.map(item =>
            new Post(item.title, item.inhoud)
          )
        )
      );

  }

  addNewPost(post): Observable<Post> {
    return this.http
    .post(this._appUrl, post)
    .pipe(
      map(
        (item: any): Post =>
        new Post(item.title, item.inhoud)
      )
    )
  }

}
