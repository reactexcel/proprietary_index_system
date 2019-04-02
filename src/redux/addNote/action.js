import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

export function* addNoteRequest(action) {
  const { name, description, templateId } = action.payload;
  const response = yield call(fireAjax, "POST", "note/createNote", {
    name,
    description,
    templateId
  });
  if (response) {
    toast.success("Note Added");
    yield put(actions.getNotesRequest());
    yield put(actions.addNoteSuccess());
  } else {
    toast.error("Something went wrong while adding note");
    yield put(actions.addNoteError(response.data.message));
  }
}
