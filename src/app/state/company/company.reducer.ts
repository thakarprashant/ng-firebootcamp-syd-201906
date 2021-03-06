import { Company } from './../../company/company';
import { ActionReducer, Action } from '@ngrx/store';
import * as companyActions from './company.actions';


export function companyReducer(
  state: Company[] = [],
  action: companyActions.All): Company[] {
    switch (action.type) {
        case companyActions.LOAD_COMPANIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
