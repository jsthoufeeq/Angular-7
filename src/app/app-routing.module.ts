import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';  
import { CartComponent } from './cart/cart.component';  
import { ProductComponent } from './product/product.component'; 

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'detail',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },{
    path: 'cart',
    component: CartComponent
  },{
    path: 'product/:id',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
