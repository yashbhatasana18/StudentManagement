import {
  INSTITUTES_LIST_REQUEST,
  INSTITUTES_LIST_SUCCESS,
  INSTITUTES_LIST_FAIL,
  INSTITUTES_CREATE_REQUEST,
  INSTITUTES_CREATE_SUCCESS,
  INSTITUTES_CREATE_FAIL,
  INSTITUTES_UPDATE_FAIL,
  INSTITUTES_UPDATE_SUCCESS,
  INSTITUTES_UPDATE_REQUEST,
  INSTITUTES_DELETE_REQUEST,
  INSTITUTES_DELETE_SUCCESS,
  INSTITUTES_DELETE_FAIL,
} from "../constants/instituteConstants";

export const instituteListReducer = (state = { institute: [] }, action) => {
  switch (action.type) {
    case INSTITUTES_LIST_REQUEST:
      return { loading: true };
    case INSTITUTES_LIST_SUCCESS:
      return { loading: false, instituteInfo: action.payload };
    case INSTITUTES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const instituteAddReducer = (state = {}, action) => {
  switch (action.type) {
    case INSTITUTES_CREATE_REQUEST:
      return { loading: true };
    case INSTITUTES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case INSTITUTES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const instituteEditReducer = (state = {}, action) => {
  switch (action.type) {
    case INSTITUTES_UPDATE_REQUEST:
      return { loading: true };
    case INSTITUTES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case INSTITUTES_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const instituteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case INSTITUTES_DELETE_REQUEST:
      return { loading: true };
    case INSTITUTES_DELETE_SUCCESS:
      return { loading: false, success: true };
    case INSTITUTES_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
