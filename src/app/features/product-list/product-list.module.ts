import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import {
  AddToCartModule,
  defaultScrollConfig,
  IconModule,
  ItemCounterModule,
  ListNavigationModule,
  MediaModule,
  ProductVariantsModule,
  SpinnerModule,
  StarRatingModule,
  ViewConfig,
  ViewConfigModule,
} from '@spartacus/storefront';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductListComponent } from './container/product-list.component';
import { ProductScrollComponent } from './container/product-scroll/product-scroll.component';
import { ProductFacetNavigationComponent } from './product-facet-navigation/product-facet-navigation.component';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    ViewConfigModule,
    ProductVariantsModule,
    FeaturesConfigModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: ProductListComponent,
        },
        ProductGridComponent: {
          component: ProductListComponent,
        },
        SearchResultsListComponent: {
          component: ProductListComponent,
        },
      },
    }),
  ],
  providers: [
    provideDefaultConfig(<ViewConfig>defaultScrollConfig),
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: ProductListComponent,
        },
        ProductGridComponent: {
          component: ProductListComponent,
        },
        SearchResultsListComponent: {
          component: ProductListComponent,
        },
      },
    }),
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductViewComponent,
    ProductScrollComponent,
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductGridItemComponent,
    ProductViewComponent,
    ProductScrollComponent,
  ],
  entryComponents: [ProductListComponent, ProductFacetNavigationComponent],
})
export class ProductListModule {}
