import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const addNoteReset = (state, action) => update(state, { $set: initialState });
const addNoteRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const addNoteSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "" }
  });
const addNoteError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: "" }
  });
};
export default handleActions(
  {
    [constants.ADD_NOTE_REQUEST]: addNoteRequest,
    [constants.ADD_NOTE_SUCCESS]: addNoteSuccess,
    [constants.ADD_NOTE_ERROR]: addNoteError,
    [constants.ADD_NOTE_RESET]: addNoteReset
  },
  initialState
);
