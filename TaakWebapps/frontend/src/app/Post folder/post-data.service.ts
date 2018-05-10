import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Comment } from './comment/comment.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';

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

  addCommentToPost(comment: Comment, post: Post): Observable<Comment>{
    return this.http
    .post(`${this._appUrl}${post.id}/comments`, comment).pipe(map(Comment.fromJSON))
  }

  removePost(rec : Post): Observable<Post>{
    return this.http.delete(`${this._appUrl}${rec.id}`).pipe(map(Post.fromJson));
  }

  
}
