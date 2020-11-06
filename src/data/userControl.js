import axios from "axios";
import httpClient from "./httpClient";



export const login = async (email, password) => {
    try {
      const result = await httpClient.request({
        url: `/c_auth/login`,
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
      // alert(result.Pesan);
      console.log("data", result)

      if (result.Error) {
        return Promise.reject(result.Pesan);
      } else {
        return result;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  export const  resetPassword = async (conPass, newPass, email) => {
    try {
      const result = await httpClient.request({
        url: `/c_auth/resetpass_newlogin`,

        method: "POST",
        data: {
          conpass: conPass,
          newpass: newPass,
          email: email
        }
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const  changePassword = async (email, pass, conpass) => {
    try {
      const result = await httpClient.request({
        url: `/c_profile/changePassReact`,
        method: "POST",
        data: {
          email: email,
          password: pass,
          cpassword: conpass
        }
      });

      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const  saveProfile = async data => {
    try {
      const result = await httpClient.request({
        url: `/c_profile/save`,
        method: "POST",
        data: {
          UserName: data.email,
          Name: data.name,
          Handphone: data.phone,
          Gender: data.gender,
          wherename: data.name
        }
      });

      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const  logout = () => null;


