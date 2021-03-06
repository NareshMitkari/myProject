import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'; 

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    PostComponent,
    AddPostComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule 
  ],
 // exports: [CommonModule, NgxPaginationModule]
})
export class AdminModule { }
