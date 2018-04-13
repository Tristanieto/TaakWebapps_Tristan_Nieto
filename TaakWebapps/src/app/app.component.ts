import { Component } from '@angular/core';
import { PostDataService } from './post-data.service';
import { Post } from './post/post.model';

@Component({
  providers: [PostDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private filterPostName: string;
  
constructor(private _postDataService : PostDataService){

}

get posts(): Post[]{
  return this._postDataService.posts;
}

newPostAdded(recipe){
  this._postDataService.addNewPost(recipe);
}

applyFilter(filter:string){
  this.filterPostName = filter;
}


}
