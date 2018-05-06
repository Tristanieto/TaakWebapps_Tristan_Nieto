import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(posts: Post[], searchValue :string): Post[] {
    if(!searchValue || searchValue.length === 0){
      return posts;
    }else{
      return posts.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase()) 
      || p.addedBy.toLowerCase().includes(searchValue.toLowerCase()));
    }
  }

}
