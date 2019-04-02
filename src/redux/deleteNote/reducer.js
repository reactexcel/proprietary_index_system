import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const deleteNoteReset = (state, action) => update(state, { $set: initialState });
const deleteNoteRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const deleteNoteSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "" }
  });
const deleteNoteError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: "" }
  });
};
export default handleActions(
  {
    [constants.DELETE_NOTE_REQUEST]: deleteNoteRequest,
    [constants.DELETE_NOTE_SUCCESS]: deleteNoteSuccess,
    [constants.DELETE_NOTE_ERROR]: deleteNoteError,
    [constants.DELETE_NOTE_RESET]: deleteNoteReset
  },
  initialState
);
