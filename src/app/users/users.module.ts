import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUsersComponent } from './presentation/pages/page-users/page-users.component';
import { UserComponent } from './presentation/views/user/user.component';
import { UserslistComponent } from './userslist/userslist.component';


@NgModule({
  declarations: [
    PageUsersComponent,
    UserComponent,
    UserslistComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[PageUsersComponent,UserslistComponent]
})
export class UsersModule { }
