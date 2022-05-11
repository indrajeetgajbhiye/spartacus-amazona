import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { TestSpartacusComponent } from './features/outlets/test-spartacus/test-spartacus.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestSpartacusComponent,
    data: { pageLabel: '/homepage' },
    canActivate: [CmsPageGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
