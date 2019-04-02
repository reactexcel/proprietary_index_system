import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

export function* addTrancheRequest(action) {
  const response = yield call(
    fireAjax,
    "POST",
    "note/createNote",
    action.payload
  );
  if (response && response.status === 200) {
    toast.success("Tranche Added");
    yield put(actions.getNotesRequest());
    yield put(actions.addTrancheSuccess());
  } else {
    toast.error("Something went wrong while adding tranche")
    yield put(actions.addTrancheError(response));
  }
}
