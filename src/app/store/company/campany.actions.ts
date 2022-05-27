import { Action } from '@ngrx/store';

export enum Company {
  ADD_COMPANY = '[Company] Add Company',

  ADD_COMPANY_SUCCESS = '[Company] Add Company Success',

  ADD_COMPANY_FAILURE = '[Company] Add Company Failure',
}

export class AddCompany implements Action {
  readonly type = Company.ADD_COMPANY;

  constructor(public payload: any) {}
}

export class AddCompanySuccess implements Action {
  readonly type = Company.ADD_COMPANY_SUCCESS;

  constructor(public payload: any) {}
}

export class AddCompanyFailure implements Action {
  readonly type = Company.ADD_COMPANY_FAILURE;

  constructor(public error: any) {}
}

export type CompanyActions = AddCompany | AddCompanySuccess | AddCompanyFailure;
