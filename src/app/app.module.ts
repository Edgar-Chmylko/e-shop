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
import { AdminMainPageComponent } from './component/admin/mainpage/mainpage.component';
import { HeaderComponent } from './component/admin/header/header.component';
import { FooterComponent } from './component/admin/footer/footer.component';
import { ProductlistComponent } from './component/admin/productlist/productlist.component';
import { ProductaddComponent } from './component/admin/productadd/productadd.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentViewComponent,
    HomePageComponent,
    NavbarComponent,
    CategoryListComponent,
    AdminMainPageComponent,
    HeaderComponent,
    FooterComponent,
    ProductlistComponent,
    ProductaddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
