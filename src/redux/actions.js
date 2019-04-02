import { createAction } from "redux-actions";
import constants from "./constants";

export const signupRequest = createAction(constants.SIGNUP_REQUEST);
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupError = createAction(constants.SIGNUP_ERROR);

export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);

export const addNoteRequest = createAction(constants.ADD_NOTE_REQUEST);
export const addNoteSuccess = createAction(constants.ADD_NOTE_SUCCESS);
export const addNoteError = createAction(constants.ADD_NOTE_ERROR);
export const addNoteReset = createAction(constants.ADD_NOTE_RESET);

export const updateNoteRequest = createAction(constants.UPDATE_NOTE_REQUEST);
export const updateNoteSuccess = createAction(constants.UPDATE_NOTE_SUCCESS);
export const updateNoteError = createAction(constants.UPDATE_NOTE_ERROR);
export const updateNoteReset = createAction(constants.UPDATE_NOTE_RESET);

export const getNotesRequest = createAction(constants.GET_NOTES_REQUEST);
export const getNotesSuccess = createAction(constants.GET_NOTES_SUCCESS);
export const getNotesError = createAction(constants.GET_NOTES_ERROR);

export const deleteNoteRequest = createAction(constants.DELETE_NOTE_REQUEST);
export const deleteNoteSuccess = createAction(constants.DELETE_NOTE_SUCCESS);
export const deleteNoteError = createAction(constants.DELETE_NOTE_ERROR);
export const deleteNoteReset = createAction(constants.DELETE_NOTE_RESET);

export const addTrancheRequest = createAction(constants.ADD_TRANCHE_REQUEST);
export const addTrancheSuccess = createAction(constants.ADD_TRANCHE_SUCCESS);
export const addTrancheError = createAction(constants.ADD_TRANCHE_ERROR);
export const addTrancheReset = createAction(constants.ADD_TRANCHE_RESET);

export const createTemplateRequest = createAction(
  constants.CREATE_TEMPLATE_REQUEST
);
export const createTemplateSuccess = createAction(
  constants.CREATE_TEMPLATE_SUCCESS
);
export const createTemplateError = createAction(
  constants.CREATE_TEMPLATE_ERROR
);

export const listTemplateRequest = createAction(
  constants.LIST_TEMPLATE_REQUEST
);
export const listTemplateSuccess = createAction(
  constants.LIST_TEMPLATE_SUCCESS
);
export const listTemplateError = createAction(constants.LIST_TEMPLATE_ERROR);

export const updateTemplateRequest = createAction(
  constants.UPDATE_TEMPLATE_REQUEST
);
export const updateTemplateSuccess = createAction(
  constants.UPDATE_TEMPLATE_SUCCESS
);
export const updateTemplateError = createAction(constants.UPDATE_TEMPLATE_ERROR);
