import { login } from "../data/userControl";
import EmpData from "../data/DashBoardPage.json";
import httpClient from "../data/httpClient"


export const userService = {
  loginUser,
  getEmp,
};

function loginUser(email, password) {
  try {
    const result = httpClient.request({
      url: `c_auth/login`,
      method: "POST",
      data: {
        email,
        password,
        token: "",
        token_firebase: "token test",
        device: "ios",
        mac: "mac test",
        app: "A"
      }
    });
    if (result.Error) {
      return Promise.reject(result.Pesan);
    } else {
      return result;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

function getEmp(userId) {
  try {
    const result = httpClient.request({
      url: `c_approval/groupMenu`,
      method: "POST",
      data: {
        approval_user: userId,

      },
    });
    return  result;
  } catch (error) {
    return Promise.reject(error);
  }
}

// getApproveMenu = async (userId,entity_cd)=> {
//   try {
//     const result = await httpClient.request({
//       url: `c_approval//approvalMenu`,
//       method: "POST",
//       headers: {
//         "Content-Type" : "application/json"
//       },
//       data: {
//         approval_user: userId,
//         entity_cd: entity_cd,

//       },
//     });
//     console.log('test', result)
//     return result;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }
