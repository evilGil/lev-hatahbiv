import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AlertModule, AccordionModule, ModalModule, PaginationModule } from 'ngx-bootstrap';

import { ShoppingCartService } from './services/shopping-cart.service';
import { DataService } from './services/data.service';
import { HttpDataService } from './services/http-data.service';

import { routing } from './body/body-routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartIconComponent } from './header/cart-icon/cart-icon.component';
import { TopNavComponent } from './header/top-nav/top-nav.component';
import { AboutUsComponent } from './body/about-us/about-us.component';
import { BodyComponent } from './body/body.component';
import { ClassesComponent } from './body/classes/classes.component';
import { ClassBannerComponent } from './body/classes/class-banner/class-banner.component';
import { ContactPageComponent } from './body/contact-page/contact-page.component';
import { HomePageComponent } from './body/home-page/home-page.component';
import { SideNavComponent } from './body/side-nav/side-nav.component';
import { SideNavItemComponent } from './body/side-nav/side-nav-item.component';
import { SpinnerComponent } from './body/spinner/spinner.component';
import { TermsPageComponent } from './body/terms-page/terms-page.component';
import { TermSectionComponent } from './body/terms-page/term-section.component';
import { ShoppingCartPageComponent } from './body/shopping-cart-page/shopping-cart-page.component';
import { MinusPlusButtonComponent } from './helper-components/minus-plus-button/minus-plus-button.component';
import { ThumbnailsPageComponent } from './body/store-pages/thumbnails-page.component';
import { SizeItemsPageComponent } from './body/store-pages/size-items-page/size-items-page.component';
import { ColorItemsPageComponent } from './body/store-pages/color-items-page/color-items-page.component';
import { ItemColorsPageComponent } from './body/store-pages/color-items-page/item-colors-page.component';
import { ColorItemComponent } from './body/store-pages/color-items-page/color-item.component';
import { ItemThumbnailComponent } from './body/store-pages/item-components/item-thumbnail.component';
import { AddToCartModalComponent } from './helper-components/add-to-cart-modal/add-to-cart-modal.component';
import { SizeItemComponent } from './body/store-pages/size-items-page/size-item.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartIconComponent,
    TopNavComponent,
    AboutUsComponent,
    BodyComponent,
    ClassesComponent,
    ClassBannerComponent,
    ContactPageComponent,
    HomePageComponent,
    SideNavItemComponent,
    SideNavComponent,
    SpinnerComponent,
    TermsPageComponent,
    TermSectionComponent,
    ShoppingCartPageComponent,
    MinusPlusButtonComponent,
    ThumbnailsPageComponent,
    SizeItemsPageComponent,
    ColorItemsPageComponent,
    ItemColorsPageComponent,
    ColorItemComponent,
    ItemThumbnailComponent,
    AddToCartModalComponent,
    SizeItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    routing,
    FormsModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    HttpModule
  ],
  providers: [ShoppingCartService, DataService, HttpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
