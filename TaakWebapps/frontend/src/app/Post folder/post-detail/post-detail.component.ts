import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../post-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../comment/comment.model'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private _post: Post;
  private comment: FormGroup;

  constructor(private route: ActivatedRoute, private postDataService : PostDataService, private fb: FormBuilder) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(pa => this.postDataService.getPost(pa.get('id'))
    // .subscribe(item => this._post = item));

    this.route.data.subscribe(item => this._post = item['post']);

    this.comment = this.fb.group({
      inhoud: ['', [Validators.required]]
    })
  }

  get post(): Post{
    return this._post
  }

  onSubmit(){
    let comment = new Comment(this.comment.value.inhoud);
    this._post.addComment(comment);
    this.postDataService.addCommentToPost(comment,this._post).subscribe();
    
  }



}
