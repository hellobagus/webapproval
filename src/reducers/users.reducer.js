import { userConstants } from "../constants";


export function empList(state = {}, action) {
  switch (action.type) {
    case userConstants.GETEMP_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETEMP_SUCCESS:
      return {
        items: action.empList,
      };
    case userConstants.GETEMP_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export function menuApprove(state = {}, action) {
  switch (action.type) {
    case userConstants.APPROVEMENU_REQUEST:
      return {
        loading: true,
      };
    case userConstants.APPROVEMENU_SUCCESS:
      return {
        items: action.menuApprove
      };
    case userConstants.APPROVEMENU_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}

export function detail(state = {}, action) {
  switch (action.type) {
    case userConstants.DETAIL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.DETAIL_SUCCESS:
      return {
        items: action.detail
      };
    case userConstants.DETAIL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}


export function viewdetail(state = {}, action) {
  switch (action.type) {
    case userConstants.VIEWDETAIL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.VIEWDETAIL_SUCCESS:
      return {
        items: action.viewdetail
      };
    case userConstants.VIEWDETAIL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}


export function approve(state = {}, action) {
  switch (action.type) {
    case userConstants.VIEWDETAIL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.VIEWDETAIL_SUCCESS:
      return {
        items: action.approve
      };
    case userConstants.VIEWDETAIL_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}


