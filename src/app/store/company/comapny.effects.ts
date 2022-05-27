import { Company, CompanyActions } from './campany.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CompanyEffects {
  constructor(public actions$: Actions) {}
  @Effect()
  addCompany = this.actions$.pipe(
    ofType(Company.ADD_COMPANY),
    map((action: any) => ({
      type: Company.ADD_COMPANY_SUCCESS,
      payload: action.payload,
    }))
  );
}
