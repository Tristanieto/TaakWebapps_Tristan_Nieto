import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "../user/register/register.component";
import { LoginComponent } from "../user/login/login.component";
import { HomeComponent } from "../home/home.component";

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { enableTracing: true })
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }