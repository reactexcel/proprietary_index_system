import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  createTemplate: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
  },
  listTemplate: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: []
  }
};

const createTemplateRequest = (state, action) =>
  update(state, {
    createTemplate: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });
const createTemplateSuccess = (state, action) =>
  update(state, {
    createTemplate: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: "" }
    }
  });
const createTemplateError = (state, action) =>
  update(state, {
    createTemplate: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

const listTemplateRequest = (state, action) =>
  update(state, {
    listTemplate: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });
const listTemplateSuccess = (state, action) =>
  update(state, {
    listTemplate: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: "" },
      data: { $set: action.payload }
    }
  });
const listTemplateError = (state, action) =>
  update(state, {
    listTemplate: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

const updateTemplateRequest = (state, action) =>
  update(state, {
    createTemplate: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false }
    }
  });
const updateTemplateSuccess = (state, action) =>
  update(state, {
    createTemplate: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: "" }
    }
  });
const updateTemplateError = (state, action) =>
  update(state, {
    createTemplate: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

export default handleActions(
  {
    [constants.CREATE_TEMPLATE_REQUEST]: createTemplateRequest,
    [constants.CREATE_TEMPLATE_SUCCESS]: createTemplateSuccess,
    [constants.CREATE_TEMPLATE_ERROR]: createTemplateError,
    [constants.LIST_TEMPLATE_REQUEST]: listTemplateRequest,
    [constants.LIST_TEMPLATE_SUCCESS]: listTemplateSuccess,
    [constants.LIST_TEMPLATE_ERROR]: listTemplateError,
    [constants.UPDATE_TEMPLATE_REQUEST]: updateTemplateRequest,
    [constants.UPDATE_TEMPLATE_SUCCESS]: updateTemplateSuccess,
    [constants.UPDATE_TEMPLATE_ERROR]: updateTemplateError
  },
  initialState
);
