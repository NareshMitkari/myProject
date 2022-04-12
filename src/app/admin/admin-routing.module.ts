import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { UserComponent } from './user/user.component';

 
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UserComponent as addUserComponent } from './add-post/user/user.component';
  
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'user', component : UserComponent},
  {path : 'post', component : PostComponent},
  {path : 'addPost', component : AddPostComponent},
   {path : 'user/adduser', component : addUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
