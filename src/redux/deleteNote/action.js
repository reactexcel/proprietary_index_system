import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

export function* deleteNoteRequest(action) {
  const response = yield call(
    fireAjax,
    "DELETE",
    `note/deleteNote/${action.payload}`
  );
  if (response && response.status === 200) {
    toast.success("Note or Tranche Deleted");
    yield put(actions.getNotesRequest());
    yield put(actions.deleteNoteSuccess());
  } else {
    toast.error("Something went wrong while deleting");
    yield put(actions.deleteNoteError(response));
  }
}
