import { SearchBoxModule } from './features/search-box/search-box.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';

import { OutletsModule } from './features/outlets/outlets.module';
import { SpartacusConfigModule } from './config/spartacus-config/spartacus-config.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { ProductListModule } from './features/product-list/product-list.module';
import { ProductOccConfigModule } from './config/occ/product-occ-config/product-occ-config.module';
import { LayoutConfigModule } from './layout-config/layout-config.module';
import { StoreModule } from '@ngrx/store';
import { Effects, Stores } from './store/global.store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutConfigModule,
    OutletsModule,
    SpartacusConfigModule,
    // ProductListModule,
    // ProductOccConfigModule,
    // SearchBoxModule,
    StoreModule.forRoot(Stores),
    EffectsModule.forRoot(Effects),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
        },
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '3.0',
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
