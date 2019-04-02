import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  data: []
};

const getNotesRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const getNotesSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    data: { $set: action.payload }
  });
const getNotesError = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: "" }
  });

export default handleActions(
  {
    [constants.GET_NOTES_REQUEST]: getNotesRequest,
    [constants.GET_NOTES_SUCCESS]: getNotesSuccess,
    [constants.GET_NOTES_ERROR]: getNotesError
  },
  initialState
);
