import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AddCompany } from './campany.actions';

@Injectable({
  providedIn: 'root',
})
export class ComapnyService {
  constructor(private store: Store, private actions$: Actions) {}

  public addCompany(company: string) {
    this.store.dispatch(new AddCompany(company));
  }
}
