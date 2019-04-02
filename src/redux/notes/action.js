import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import { call, put } from "redux-saga/effects";

export function* getNotesRequest(action) {
  const response = yield call(fireAjax, "GET", "note/listNotes");
  if (response && response.status === 200) {
    yield put(actions.getNotesSuccess(response.data.data));
  } else {
    yield put(actions.getNotesError(response.data.message));
  }
}
