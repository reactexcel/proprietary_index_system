import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import { call, put } from "redux-saga/effects";

export function* updateNoteRequest(action) {
  const response = yield call(
    fireAjax,
    "PUT",
    "note/updateNote",
    action.payload
  );
  if (response && response.status === 200) {
    yield put(actions.getNotesRequest());
    yield put(actions.updateNoteSuccess());
  } else {
    yield put(actions.updateNoteError(response.data.message));
  }
}
