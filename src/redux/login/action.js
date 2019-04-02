import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import { call, put } from "redux-saga/effects";
import localStore from "../../services/localStore";

export function* loginRequest(action) {
  const { email, password } = action.payload;
  const response = yield call(fireAjax, "POST", "user/login", {
    email,
    password
  });
  if (response && response.status === 200) {
    localStore("token", response.data.data.accessToken);
    yield put(actions.loginSuccess());
  } else {
    yield put(actions.loginError(response.data.message));
  }
}
