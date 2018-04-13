import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFilterPipe } from './post-filter.pipe';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFilterPipe,
    AddPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
