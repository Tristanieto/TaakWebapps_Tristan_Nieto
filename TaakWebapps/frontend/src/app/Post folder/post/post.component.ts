import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { PostDataService } from '../post-data.service';
import { AuthenticationService } from '../../user/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public _post : Post;
  @Output() public deletePost = new EventEmitter<Post>();

  constructor(private authService: AuthenticationService, private postDataService: PostDataService) { }

  ngOnInit() {
    
  }

  get currentUser(): Observable<String> {
    return this.authService.user$;
  }

  removePost(){
    this.deletePost.emit(this._post);
  }


}
