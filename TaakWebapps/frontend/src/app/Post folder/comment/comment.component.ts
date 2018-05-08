import { Component, OnInit, Input } from '@angular/core';
import {Comment } from './comment.model'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() public _comment: Comment;

  constructor() { }

  ngOnInit() {
  }

  get comment(){
    return this._comment;
  }

}
