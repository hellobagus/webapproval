import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { empList, menuApprove, detail, viewdetail, approve} from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  empList,
  menuApprove,
  detail,
  viewdetail,
  approve,
  alert
});

export default rootReducer;