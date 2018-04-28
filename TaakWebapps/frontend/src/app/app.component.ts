import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(private authService: AuthenticationService) {

  }

  get currentUser(): Observable<String> {
    return this.authService.user$;
  }

  // private filterPostName: string;
  // private filterPost$ = new Subject<string>();

  //   private _posts: Post[];

  // constructor(private _postDataService : PostDataService){
  //   this.filterPost$.subscribe(val => this.filterPostName = val);
  // }

  // get posts(){
  //   return this._posts;
  // }

  // ngOnInit() {
  //   // this._postDataService.posts.subscribe(items => this._posts = items);
  // }

  // newPostAdded(post){
  //   this._postDataService.addNewPost(post).subscribe(item => this._posts.push(item));
  // }

  // applyFilter(filter:string){
  //   this.filterPostName = filter;
  // }


}
