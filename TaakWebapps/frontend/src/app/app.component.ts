import { Component, OnInit } from '@angular/core';
import { PostDataService } from './post-data.service';
import { Post } from './post/post.model';
import { Subject } from 'rxjs/Subject';

@Component({
  providers: [PostDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private filterPostName: string;
  private filterPost$ = new Subject<string>();

  private _posts;
  
constructor(private _postDataService : PostDataService){
  this.filterPost$.subscribe(val => this.filterPostName = val);
}

get posts(){
  return this._posts;
}

ngOnInit() {
  this._posts = this._postDataService.posts;
}

// newPostAdded(recipe){
//   this._postDataService.addNewPost(recipe);
// }

applyFilter(filter:string){
  this.filterPostName = filter;
}


}
