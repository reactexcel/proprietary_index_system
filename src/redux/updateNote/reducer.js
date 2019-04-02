import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const updateNoteReset = (state, action) =>
  update(state, { $set: initialState });
const updateNoteRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const updateNoteSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "" }
  });
const updateNoteError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: "" }
  });
};
export default handleActions(
  {
    [constants.UPDATE_NOTE_REQUEST]: updateNoteRequest,
    [constants.UPDATE_NOTE_SUCCESS]: updateNoteSuccess,
    [constants.UPDATE_NOTE_ERROR]: updateNoteError,
    [constants.UPDATE_NOTE_RESET]: updateNoteReset
  },
  initialState
);
