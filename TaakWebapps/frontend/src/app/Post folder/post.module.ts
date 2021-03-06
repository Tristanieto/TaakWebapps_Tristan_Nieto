import { NgModule } from "@angular/core";
import { PostComponent } from "./post/post.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostFilterPipe } from "./post-filter.pipe";
import { PostListComponent } from "./post-list/post-list.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { PostDataService } from "./post-data.service";
import { RouterModule } from "@angular/router";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostResolver } from "./Post-resolver";
import { httpInterceptorProviders } from "../http-interceptors/index";
import { AuthenticationService } from "../user/authentication.service";
import { AuthGuardService } from "../user/auth-guard.service";
import { CommentComponent } from "./comment/comment.component";
const routes = [
    { path: 'list', component: PostListComponent},
    { path: 'add', component: AddPostComponent},
    { path: ':id', component: PostDetailComponent, resolve: {post: PostResolver}}
]
@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        PostComponent,
        AddPostComponent,
        PostFilterPipe,
        PostListComponent,
        PostDetailComponent,
        CommentComponent
    ],
    providers: [httpInterceptorProviders,PostDataService, PostResolver]
})
export class PostModule{}