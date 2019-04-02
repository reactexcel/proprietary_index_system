import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const userLoginRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const userLoginSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "" }
  });
const userLoginError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload }
  });

export default handleActions(
  {
    [constants.LOGIN_REQUEST]: userLoginRequest,
    [constants.LOGIN_SUCCESS]: userLoginSuccess,
    [constants.LOGIN_ERROR]: userLoginError
  },
  initialState
);
