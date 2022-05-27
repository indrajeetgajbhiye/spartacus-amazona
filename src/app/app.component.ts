import { Component, ComponentFactoryResolver } from '@angular/core';
import { OutletPosition, OutletService } from '@spartacus/storefront';
import { factory } from 'typescript';
import { TestSpartacusComponent } from './features/outlets/test-spartacus/test-spartacus.component';
import { CompanyService } from './store/company/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spartacus-amazona';
  value: number = 0;
  show: boolean = true;
  company: any;

  constructor(
    private componenntFactoryResolver: ComponentFactoryResolver,
    private outletService: OutletService,
    private companyService: CompanyService
  ) {
    // const factory = this.componenntFactoryResolver.resolveComponentFactory(
    //   TestSpartacusComponent
    // );
    // this.outletService.add('SiteLogo', factory, OutletPosition.AFTER);

    this.companyService.getCurrentCompany().subscribe((company) => {
      this.company = company;
    });
  }
  changeValue() {
    this.value = this.value + 1;
  }
  toggle() {
    console.log('toggle');
    this.show = !this.show;
  }
  changesInValueChild(event) {
    console.log('current value in parent is', event);
  }
}
