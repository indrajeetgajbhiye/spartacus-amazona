import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, RoutingConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              ':campaign/product/:productCode',
              'product/:productCode/:name',
              'product/:productCode',
            ],
            // paramsMapping: {
            //   productCode: 'code',
            //   name: 'name',
            //   campaign: 'campaign',
            // },
          },
        },
      },
    } as RoutingConfig),
  ],
})
export class SpartacusConfigModule {}
