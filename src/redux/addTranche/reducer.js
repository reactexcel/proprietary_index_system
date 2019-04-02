import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ""
};

const addTrancheReset = (state, action) => update(state, { $set: initialState });
const addTrancheRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false }
  });
const addTrancheSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "" }
  });
const addTrancheError = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: "" }
  });
};
export default handleActions(
  {
    [constants.ADD_TRANCHE_REQUEST]: addTrancheRequest,
    [constants.ADD_TRANCHE_SUCCESS]: addTrancheSuccess,
    [constants.ADD_TRANCHE_ERROR]: addTrancheError,
    [constants.ADD_TRANCHE_RESET]: addTrancheReset
  },
  initialState
);
