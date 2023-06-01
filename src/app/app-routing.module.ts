import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';



const routes: Routes = [{
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
},
{
    path: "login",
    component: LoginPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
