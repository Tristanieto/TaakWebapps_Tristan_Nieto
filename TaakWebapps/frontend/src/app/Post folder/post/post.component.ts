import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    
  }

  get currentUser(): Observable<String> {
    return this.authService.user$;
  }


}
