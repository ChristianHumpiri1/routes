import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUsersComponent } from './presentation/pages/page-users/page-users.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path:'lista', component:UserslistComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
