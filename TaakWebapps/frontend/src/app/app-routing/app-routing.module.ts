import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "../user/register/register.component";
import { LoginComponent } from "../user/login/login.component";
import { HomeComponent } from "../home/home.component";
import { SelectivePreloadStrategy } from "./SelectivePreloadStrategy";
import {AuthGuardService} from '../user/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'post',
        canActivate: [AuthGuardService],
        loadChildren: 'app/Post folder/post.module#PostModule',
        data: { preload: true }
    },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadStrategy })
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
    providers: [SelectivePreloadStrategy]
})
export class AppRoutingModule { }