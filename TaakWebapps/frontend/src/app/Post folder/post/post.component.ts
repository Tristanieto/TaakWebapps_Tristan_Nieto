import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public _post : Post;

  constructor() { }

  ngOnInit() {
  }

  

}
