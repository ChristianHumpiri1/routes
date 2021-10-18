import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { PageProductComponent } from './products/presentation/pages/page-product/page-product.component';
import { ProductsModule } from './products/products.module';
import { PageUsersComponent } from './users/presentation/pages/page-users/page-users.component';
import { UsersModule } from './users/users.module';


const routes : Routes =[
  {path:'', component:PageLoginComponent},
  {path:'products', component:PageProductComponent},
  {path:'users', loadChildren: () => import('./users/users.module').then((m) =>m.UsersModule)},
  {path:'***', redirectTo:''}
  
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule,ProductsModule,RouterModule,
    RouterModule.forRoot(routes),UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
