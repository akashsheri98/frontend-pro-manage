import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
console.log(backendUrl);
// register api
export const registerUser = async ({
  username,
  email,
  password,
  confirmPassword,
}) => {
  try {
    const reqUrl = `${backendUrl}/auth/register`;

    const reqPayload = { username, email, password, confirmPassword };

    const response = await axios.post(reqUrl, reqPayload);
    //console.log(response.message);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 400) {
      //return error.response.data;
      return toast.error(error.response.data.message);
    } else if (error.response && error.response.status === 401) {
      // return error.response.data;
      return toast.error(error.response.data.message);
    } else {
      // return error.response.data;
      return toast.error(error.response.data.message);
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${backendUrl}/auth/login`;

    const reqPayload = {  email, password};

    const response = await axios.post(reqUrl, reqPayload);
    //console.log(response.message);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 400) {
      return toast.error(error.response.data.message);
    } else if (error.response && error.response.status === 401) {
      return toast.error(error.response.data.message);
    } else {
      return toast.error(error.response.data.message);
    }
  }
};
 export const logoutUser = async () => {
  try {
    const reqUrl = `${backendUrl}/auth/logout`;
    const response = await axios.get(reqUrl, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token') || localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const settings = async ({oldPassword, newPassword}) => {
  try {
    const reqUrl = `${backendUrl}/auth/resetPassword`;
    const reqPayload = { oldPassword, newPassword };
    const response = await axios.post(reqUrl, reqPayload , {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token') || localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error); 
    if (error.response && error.response.status === 400) {
      return toast.error(error.response.data.message);
    } else if (error.response && error.response.status === 401) {
      return toast.error(error.response.data.message);
    } else {
      return toast.error(error.response.data.message);
    }
  }
}