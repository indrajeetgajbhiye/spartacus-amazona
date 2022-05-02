import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets/outlets.component';
import { TestSpartacusComponent } from './test-spartacus/test-spartacus.component';

@NgModule({
  declarations: [OutletsComponent, TestSpartacusComponent],
  imports: [CommonModule],
  exports: [OutletsComponent, TestSpartacusComponent],
})
export class OutletsModule {}
