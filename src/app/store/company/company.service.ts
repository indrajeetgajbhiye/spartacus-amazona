import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AddCompany } from './campany.actions';
import * as CompanySelectors from './company.selectors';
@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private store: Store, private actions$: Actions) {}

  public addCompany(company: string) {
    this.store.dispatch(new AddCompany(company));
  }

  public getCurrentCompany() {
    return this.store.select(CompanySelectors.getCurrentComapny);
  }
}
