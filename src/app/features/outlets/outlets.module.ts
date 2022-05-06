import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets/outlets.component';
import { TestSpartacusComponent } from './test-spartacus/test-spartacus.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [OutletsComponent, TestSpartacusComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        CartTotalsComponent: {
          component: TestSpartacusComponent,
        },
      },
    }),
  ],
  providers: [],
  exports: [OutletsComponent, TestSpartacusComponent],
})
export class OutletsModule {}
