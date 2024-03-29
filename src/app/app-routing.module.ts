import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'user', component:UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
