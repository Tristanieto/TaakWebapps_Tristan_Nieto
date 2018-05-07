import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PostDataService } from '../post-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Comment } from '../comment/comment.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() public newPost = new EventEmitter<Post>();

  private post: FormGroup;
  public errorMsg: string;

  constructor(private fb: FormBuilder, private _postDataService: PostDataService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.post = this.fb.group({
      title: this.fb.control("", Validators.required),
      inhoud: this.fb.control("", Validators.required)
    })



  }

  onSubmit() {
    let commentsArray: Comment[];
    let post = new Post(this.post.value.title, this.post.value.inhoud);
    // this.newPost.emit(post);

    this._postDataService.addNewPost(post).subscribe(
      () => { },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding
          post for ${post.title}: ${error.error}`;
      }
    );

    this.router.navigate(['/post/list'])

  }

  // addPost(newPostTitle: HTMLInputElement, newPostInhoud: HTMLInputElement): boolean {
  //   const post = new Post(newPostTitle.value, newPostInhoud.value, this.post.value.comments);
  //   this.newPost.emit(post);
  //   return false;
  // }



}
