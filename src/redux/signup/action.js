import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import localStore from "../../services/localStore";
import { call, put } from "redux-saga/effects";

export function* signupRequest(action) {
  const { email, password } = action.payload;
  const response = yield call(fireAjax, "POST", "user/register", {
    email,
    password
  });
  if (response && response.status === 200) {
    localStore("token", response.data.data.accessToken);
    yield put(actions.signupSuccess());
  } else {
    yield put(actions.signupError(response.data.message));
  }
}
