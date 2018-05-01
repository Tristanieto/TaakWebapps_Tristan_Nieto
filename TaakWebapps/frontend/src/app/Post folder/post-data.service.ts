import { Injectable } from '@angular/core';
import { Post } from './post.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class PostDataService {

  private readonly _appUrl = 'API/posts/';

  constructor(private http: HttpClient) {
  }

  get posts(): Observable<Post[]> {
    return this.http
      .get(this._appUrl)
      .pipe(map((list: any[]): Post[] =>list.map(Post.fromJson)));
  }

  addNewPost(post): Observable<Post> {
    return this.http
      .post(this._appUrl, post)
      .pipe(map(Post.fromJson));


  }

  getPost(id: String): Observable<Post> {
    return this.http
      .get(`${this._appUrl}/${id}`)
      .pipe(map(Post.fromJson));
  }

}
