import { Route, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClassesComponent } from './classes/classes.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ThumbnailsPageComponent } from './store-pages/thumbnails-page.component';
import { SizeItemsPageComponent } from './store-pages/size-items-page/size-items-page.component';
import { ColorItemsPageComponent } from './store-pages/color-items-page/color-items-page.component';
import { ItemColorsPageComponent } from './store-pages/color-items-page/item-colors-page.component';

const BODY_ROUTES = [
    { path: 'about-us', component: AboutUsComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'terms', component: TermsPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'my-cart', component: ShoppingCartPageComponent },
    { path: 'store', component: ThumbnailsPageComponent },
    { path: 'store/:category', component: ThumbnailsPageComponent },
    { path: 'store/sizes/:category', component: SizeItemsPageComponent },
    { path: 'store/colors/:category', component: ColorItemsPageComponent },
    { path: 'store/colors/item/:item-name', component: ItemColorsPageComponent }
];

export const routing = RouterModule.forRoot(BODY_ROUTES);