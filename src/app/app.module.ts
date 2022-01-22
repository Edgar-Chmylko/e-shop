import { ContentViewComponent } from './components/home-page/content-view/content-view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/home-page/category-list/category-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { AdminPageComponent } from './components/admin/mainpage/mainpage.component';
import { ProductlistComponent } from './components/admin/productlist/productlist.component';
import { ProductaddComponent } from './components/admin/productadd/productadd.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: AdminPageComponent },
  { path: 'adminpage', component: AdminPageComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'productadd', component: ProductaddComponent },
  { path: 'productadd/:id', component: ProductaddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContentViewComponent,
    HomePageComponent,
    NavbarComponent,
    CategoryListComponent,
    HeaderComponent,
    FooterComponent,
    AdminPageComponent,
    ProductlistComponent,
    ProductaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    AlertModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
