import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdatetodoComponent } from './updatetodo/updatetodo.component';

const routes: Routes = [
  {path :'home/:name', component : HomeComponent, canActivate : [RouteGuardService]},
  {path :'login', component : LoginComponent},
  {path:'', component : LoginComponent},
  {path:'logout', component: LogoutComponent, canActivate : [RouteGuardService]},
  {path:'update/:id', component: UpdatetodoComponent, canActivate : [RouteGuardService]},


  {path :'**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
