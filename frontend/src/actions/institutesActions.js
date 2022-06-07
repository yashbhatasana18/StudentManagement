import {
  INSTITUTES_LIST_FAIL,
  INSTITUTES_LIST_REQUEST,
  INSTITUTES_LIST_SUCCESS,
  INSTITUTES_CREATE_FAIL,
  INSTITUTES_CREATE_REQUEST,
  INSTITUTES_CREATE_SUCCESS,
  INSTITUTES_UPDATE_FAIL,
  INSTITUTES_UPDATE_REQUEST,
  INSTITUTES_UPDATE_SUCCESS,
  INSTITUTES_DELETE_FAIL,
  INSTITUTES_DELETE_REQUEST,
  INSTITUTES_DELETE_SUCCESS,
} from "../constants/instituteConstants";
import axios from "axios";

export const listInstitutes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: INSTITUTES_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/institutes`, config);

    dispatch({
      type: INSTITUTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INSTITUTES_LIST_FAIL,
      payload: message,
    });
  }
};

export const addInstituteAction =
  (
    instituteName,
    instituteCode,
    address,
    pincode,
    city,
    state,
    phoneNo,
    email,
    website,
    principalName,
    principalPhoneNo
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: INSTITUTES_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/institutes/addInstitute`,
        {
          instituteName,
          instituteCode,
          address,
          pincode,
          city,
          state,
          phoneNo,
          email,
          website,
          principalName,
          principalPhoneNo,
        },
        config
      );

      dispatch({
        type: INSTITUTES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: INSTITUTES_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const editInstituteAction =
  (
    id,
    instituteName,
    instituteCode,
    address,
    pincode,
    city,
    state,
    phoneNo,
    email,
    website,
    principalName,
    principalPhoneNo
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: INSTITUTES_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/institutes/${id}`,
        {
          instituteName,
          instituteCode,
          address,
          pincode,
          city,
          state,
          phoneNo,
          email,
          website,
          principalName,
          principalPhoneNo,
        },
        config
      );

      dispatch({
        type: INSTITUTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: INSTITUTES_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteInstituteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INSTITUTES_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/institutes/${id}`, config);

    dispatch({
      type: INSTITUTES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: INSTITUTES_DELETE_FAIL,
      payload: message,
    });
  }
};
