import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFilterPipe } from './post-filter.pipe';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { LoginComponent } from './user/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path : 'login', component: LoginComponent},
  { path: 'post-list', component: PostListComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFilterPipe,
    AddPostComponent,
    PostListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
