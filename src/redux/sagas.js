import constants from "./constants";
import { takeLatest } from "redux-saga/effects";
import { signupRequest } from "./signup/action";
import { loginRequest } from "./login/action";
import { addNoteRequest } from "./addNote/action";
import { updateNoteRequest } from "./updateNote/action";
import { deleteNoteRequest } from "./deleteNote/action";
import { getNotesRequest } from "./notes/action";
import { addTrancheRequest } from "./addTranche/action";
import {
  createTemplateRequest,
  listTemplateRequest,
  updateTemplateRequest
} from "./template/action";

function* watchActions() {
  yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.ADD_NOTE_REQUEST, addNoteRequest);
  yield takeLatest(constants.GET_NOTES_REQUEST, getNotesRequest);
  yield takeLatest(constants.UPDATE_NOTE_REQUEST, updateNoteRequest);
  yield takeLatest(constants.DELETE_NOTE_REQUEST, deleteNoteRequest);
  yield takeLatest(constants.ADD_TRANCHE_REQUEST, addTrancheRequest);
  yield takeLatest(constants.CREATE_TEMPLATE_REQUEST, createTemplateRequest);
  yield takeLatest(constants.LIST_TEMPLATE_REQUEST, listTemplateRequest);
  yield takeLatest(constants.UPDATE_TEMPLATE_REQUEST, updateTemplateRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
