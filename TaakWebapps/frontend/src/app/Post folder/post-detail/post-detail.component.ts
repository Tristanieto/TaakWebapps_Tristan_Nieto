import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private _post: Post;

  constructor(private route: ActivatedRoute, private postDataService : PostDataService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(pa => this.postDataService.getPost(pa.get('id'))
    // .subscribe(item => this._post = item));

    this.route.data.subscribe(item => this._post = item['post']);
  }

}
