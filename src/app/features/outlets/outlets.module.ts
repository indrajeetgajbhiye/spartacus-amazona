import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets/outlets.component';
import { TestSpartacusComponent } from './test-spartacus/test-spartacus.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OutletsComponent, TestSpartacusComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        MerchandisingCarouselComponent: {
          component: TestSpartacusComponent,
        },
      },
    }),
  ],
  providers: [],
  exports: [OutletsComponent, TestSpartacusComponent],
})
export class OutletsModule {}
