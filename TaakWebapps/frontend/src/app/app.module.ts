import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PostComponent } from './Post folder/post/post.component';
import { PostFilterPipe } from './Post folder/post-filter.pipe';
import { AddPostComponent } from './Post folder/add-post/add-post.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './Post folder/post-list/post-list.component';
import { LoginComponent } from './user/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PostModule } from './Post folder/post.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthGuardService } from './user/auth-guard.service';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthenticationService } from './user/authentication.service';
import { LogoutComponent } from './user/logout/logout.component';

// const appRoutes: Routes = [
//   {path: 'home', component: HomeComponent},
//   {path: 'register', component: RegisterComponent},
//   {path : 'login', component: LoginComponent},
//   { path: '', redirectTo: 'home', pathMatch: 'full'}
// ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent, LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
