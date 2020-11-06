import { login } from "../data/userControl";
import EmpData from "../data/DashBoardPage.json";
import httpClient from "../data/httpClient"


export const menuService = {
  getMenu,
  getDetail,
  getViewDetail,
  setApprove
};



function getMenu(userId, entity_cd) {
  try {
    const result = httpClient.request({
      url: `c_approval/approvalMenu`,
      method: "POST",
      data: {
        approval_user : userId,
        entity_cd : entity_cd

      },
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}


function getDetail(approval_user, approval_id, entity_cd) {
  try {
    const result = httpClient.request({
      url: `c_approval/viewMenu`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
          approval_user: approval_user,
          approval_id: approval_id,
          entity_cd: entity_cd,
      },
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}


function getViewDetail(approval_user, entity, docNo, approval_id) {
  try {
    const result = httpClient.request({
      url: `c_approval/otorisasi`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        approval_user: approval_user,
        entity_cd: entity,
        request_no: docNo,
        approval_id: approval_id,
      },
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}


function setApprove(status, data, requestm) {
  try {
    const result = httpClient.request({
      url: `c_approval/updateApproval/${status}`,
      method: "POST",
      data: {
        entity_cd: data.entity_cd,
          doc_no: data.doc_no,
          status,
          doc_date: data.doc_date,
          remarks: data.reason_remarks,
          approval_id: data.approval_id,
          trx_type: data.trx_type,
          approve_seq: data.approve_seq,
          level_no: data.level_no,
          approval_user: data.approval_user,
          // request_no: data.doc_no,
          requestm: requestm,
      },
    });
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}