import { createFeatureSelector, createSelector } from '@ngrx/store';

export const companySelector = createFeatureSelector<any>('company');

export const getCurrentComapny = createSelector(
  companySelector,
  (state) => state.company
);
