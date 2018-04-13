import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post/post.model';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() public newPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  addPost(newPostTitle: HTMLInputElement, newPostInhoud: HTMLInputElement): boolean{
    const post = new Post(newPostTitle.value, newPostInhoud.value);
    this.newPost.emit(post);
    return false;
  }

}
