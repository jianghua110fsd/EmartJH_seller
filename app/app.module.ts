import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { SellerTopComponent } from './seller-top/seller-top.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReportsComponent } from './reports/reports.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ItemMaitenanceComponent } from './item-maitenance/item-maitenance.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CartComponent,
    SellerTopComponent,
    LoginComponent,
    SignupComponent,
    ReportsComponent,
    MyprofileComponent,
    ItemMaitenanceComponent,
    ItemListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/login' },
      { path: 'login', component: LoginComponent },
      { path: 'cart', component: CartComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'seller-top', component: SellerTopComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'myprofile', component: MyprofileComponent },
      { path: 'item-maitenance/:productId', component: ItemMaitenanceComponent },
      { path: 'item-list', component: ItemListComponent },
      { path: 'logout', component: LogoutComponent }
    ])
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule {




 }

