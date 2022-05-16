import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductSearchPage } from '@spartacus/core';
import { PageLayoutService, ViewConfig } from '@spartacus/storefront';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ViewModes } from '../product-view/product-view.component';
import { ProductListComponentService } from './product-list-component.service';

@Component({
  selector: 'cx-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  isInfiniteScroll: boolean;

  model$: Observable<ProductSearchPage> =
    this.productListComponentService.model$;

  viewMode$ = new BehaviorSubject<ViewModes>(ViewModes.Grid);
  ViewModes = ViewModes;

  constructor(
    private pageLayoutService: PageLayoutService,
    private productListComponentService: ProductListComponentService,
    public scrollConfig: ViewConfig
  ) {}

  ngOnInit(): void {
    this.isInfiniteScroll = this.scrollConfig.view.infiniteScroll.active;

    this.subscription.add(
      this.pageLayoutService.templateName$
        .pipe(take(1))
        .subscribe((template) => {
          this.viewMode$.next(
            template === 'ProductGridPageTemplate'
              ? ViewModes.Grid
              : ViewModes.List
          );
        })
    );
  }

  sortList(sortCode: string): void {
    this.productListComponentService.sort(sortCode);
  }

  setViewMode(mode: ViewModes): void {
    this.viewMode$.next(mode);
  }
  setPageSize(pageSize) {
    console.log(pageSize);
    this.productListComponentService.changePageSize(pageSize);
  }

  goToLastPage(pagination) {
    this.productListComponentService.goToPageNumber(pagination.totalPages - 1);
  }

  goToFirstPage() {
    this.productListComponentService.goToPageNumber(0);
  }

  resetAll() {
    this.productListComponentService.resetAll();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
