import { Component, OnInit } from '@angular/core';
import { PostDataService } from './Post folder/post-data.service';
import { Post } from './Post folder/post.model';
import { Subject } from 'rxjs/Subject';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

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
