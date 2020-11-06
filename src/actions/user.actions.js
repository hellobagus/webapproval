import { userConstants } from "../constants";
import { userService, menuService } from "../services";
import { history } from "../helpers";



export const login = (email, password) => async dispatch =>{ 
  dispatch(request());
  try {
    const user = await userService.loginUser(email, password);
    dispatch(success(user.Data));
    console.log(user);
    history.push("/home");

    // alert("JSON.stringify(user)");
  } catch (error) {
    alert(error);
    dispatch(failure(error));
  }


  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return { type: userConstants.LOGOUT };
}

export const getEmps = (userId) => async (dispatch) => {

  dispatch(request());
  try {
    const empList = await userService.getEmp(userId);
    dispatch(success(empList.Data))
console.log(empList)
    } catch (error) {
      dispatch(failure(error))

    }
  function request() {
    return { type: userConstants.GETEMP_REQUEST };
  }
  function success(empList) {
    return { type: userConstants.GETEMP_SUCCESS, empList };
  }
  function failure(error) {
    return { type: userConstants.GETEMP_FAILURE, error };
  }
}


export const getApproval = (userId, entity_cd) => async (dispatch) => {

  dispatch(request());
  try {
    const menuApprove = await menuService.getMenu(userId, entity_cd);
    dispatch(success(menuApprove.Data))
console.log(menuApprove)
    } catch (error) {
      dispatch(failure(error))

    }
  function request() {
    return { type: userConstants.APPROVEMENU_REQUEST };
  }
  function success(menuApprove) {
    return { type: userConstants.APPROVEMENU_SUCCESS, menuApprove };
  }
  function failure(error) {
    return { type: userConstants.APPROVEMENU_FAILURE, error };
  }
}

export const getDetail = (approval_user, approval_id, entity_cd) => async (dispatch) => {

  dispatch(request());
  try {
    const detail = await menuService.getDetail(approval_user, approval_id, entity_cd);
    dispatch(success(detail.Data))
console.log(detail)
    } catch (error) {
      dispatch(failure(error))

    }
  function request() {
    return { type: userConstants.DETAIL_REQUEST };
  }
  function success(detail) {
    return { type: userConstants.DETAIL_SUCCESS, detail };
  }
  function failure(error) {
    return { type: userConstants.DETAIL_FAILURE, error };
  }
}

export const getViewDetail = (
  approval_user, entity, docNo, approval_id) => async (dispatch) => {

  dispatch(request());
  try {
    const viewdetail = await menuService.getViewDetail(
      approval_user, entity, docNo, approval_id)
    dispatch(success(viewdetail.Data))
console.log(viewdetail)
    } catch (error) {
      dispatch(failure(error))

    }
  function request() {
    return { type: userConstants.VIEWDETAIL_REQUEST };
  }
  function success(viewdetail) {
    return { type: userConstants.VIEWDETAIL_SUCCESS, viewdetail };
  }
  function failure(error) {
    return { type: userConstants.VIEWDETAIL_FAILURE, error };
  }
}

export const approve = (
  status,
  data,
  requestm,
  UserId,
  approval_id,
  trx_type,
  approve_seq,
  level_no) => async (dispatch) => {

  dispatch(request());
  try {
    const approved = await menuService.setApprove(status,
      data,
      requestm,
      UserId,
      approval_id,
      trx_type,
      approve_seq,
      level_no)
    dispatch(success(approved.Data))
console.log(approved)
    } catch (error) {
      dispatch(failure(error))

    }
  function request() {
    return { type: userConstants.APPROVE_REQUEST };
  }
  function success(approved) {
    return { type: userConstants.APPROVE_SUCCESS, approved };
  }
  function failure(error) {
    return { type: userConstants.APPROVE_FAILURE, error };
  }
}