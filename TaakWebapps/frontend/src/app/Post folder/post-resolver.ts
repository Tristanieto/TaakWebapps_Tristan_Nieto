import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Post } from './post.model';
import { Observable } from 'rxjs/Observable';
import { PostDataService } from './post-data.service';

@Injectable()
export class PostResolver implements Resolve<Post>{

    constructor(private postService: PostDataService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post>{
        return this.postService.getPost(route.params['id'])
    }
}