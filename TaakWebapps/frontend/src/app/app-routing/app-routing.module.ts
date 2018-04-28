import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "../user/register/register.component";
import { LoginComponent } from "../user/login/login.component";
import { HomeComponent } from "../home/home.component";
import { SelectivePreloadStrategy } from "./SelectivePreloadStrategy";
import { AuthGuardService } from '../user/auth-guard.service';
import { httpInterceptorProviders } from "../http-interceptors";
import { AuthenticationService } from "../user/authentication.service";
import { LogoutComponent } from "../user/logout/logout.component";

const appRoutes: Routes = [
    {
        path: 'post',
        canActivate: [AuthGuardService],
        loadChildren: '../Post folder/post.module#PostModule',
        data: { preload: true }
    },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing:true})
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
    providers: [SelectivePreloadStrategy]
})
export class AppRoutingModule { }