import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post/post.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() public newPost = new EventEmitter<Post>();

  private post: FormGroup;

  constructor(private fb:  FormBuilder) { }

  ngOnInit() {
    this.post = this.fb.group({
      title: this.fb.control("",Validators.required),
      inhoud: this.fb.control("", Validators.required)
    })

  }

  onSubmit(){
    this.newPost.emit(new Post(this.post.value.title, this.post.value.inhoud));
    this.post.value.title = "";
    this.post.value.inhoud = "";
  }

  addPost(newPostTitle: HTMLInputElement, newPostInhoud: HTMLInputElement): boolean {
    const post = new Post(newPostTitle.value, newPostInhoud.value);
    this.newPost.emit(post);
    return false;
  }

}
