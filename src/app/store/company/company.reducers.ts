import { Company, CompanyActions } from './campany.actions';

const initialState = { company: 'Innovation' };

export function companyReducer(state = initialState, action: CompanyActions) {
  switch (action.type) {
    case Company.ADD_COMPANY_SUCCESS:
      return { ...state, company: action.payload };
    default:
      return state;
  }
}
