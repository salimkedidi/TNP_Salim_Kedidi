import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SelectartComponent } from './selectart/selectart.component';
import { E404Component } from './e404/e404.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
  {path:'shop', component:ShopComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'selectart', component:SelectartComponent },
  {path:'selectart/:matricule', component:SelectartComponent},

  {path:'', redirectTo:'shop', pathMatch:'full'},

  {path:'**', component:E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
