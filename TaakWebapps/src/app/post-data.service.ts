import { Injectable } from '@angular/core';
import { Post } from './post/post.model';

@Injectable()
export class PostDataService {

  private _posts = new Array<Post>();

  constructor() { 
    let post1 = new Post("Eerste post", "Hallo vrienden van smoelboek! Dit is mijn eerste status dat ik hierop plaats. "
    + "Ik moet nog wat zoeken hoe dit allemaal werkt dus als je tips hebt mag je me altijd helpen!");
    this.posts.push(post1);

    let post2 = new Post("Tweede post", "Dit is de inhoud van de tweede post");
    this.posts.push(post2);

    let post3 = new Post("Derde post", "Dit is de inhoud van de derde post");
    this.posts.push(post3);

  }

  get posts() : Post[]{
    return this._posts;
  }

  addNewPost(post) {
    this._posts = [...this._posts, post];
  }

}
