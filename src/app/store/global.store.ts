import { CompanyEffects } from './company/comapny.effects';
import { companyReducer } from './company/company.reducers';

export const Stores = {
  company: companyReducer,
};

export const Effects = [CompanyEffects];
