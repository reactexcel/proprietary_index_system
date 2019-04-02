import * as actions from "../actions";
import fireAjax from "../../services/fireAjax";
import localStore from "../../services/localStore";
import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

export function* createTemplateRequest(action) {
  //   const { email, password } = action.payload;
  const response = yield call(
    fireAjax,
    "POST",
    "templateStructure/createTemplateStructure",
    action.payload
  );
  if (response && response.status === 200) {
    toast.success("Template Created");
    yield put(actions.listTemplateSuccess(response.data.data));
    yield put(actions.createTemplateSuccess());
  } else {
    toast.error("Something went wrong!!!");
    yield put(actions.createTemplateError(response.data.message));
  }
}

export function* listTemplateRequest(action) {
  //   const { email, password } = action.payload;
  const response = yield call(
    fireAjax,
    "GET",
    "templateStructure/listTemplateStructures"
  );
  if (response && response.status === 200) {
    //   toast.success("Template Created");
    yield put(actions.listTemplateSuccess(response.data.data));
  } else {
    //   toast.error("Something went wrong!!!");
    yield put(actions.listTemplateError(response.data.message));
  }
}

export function* updateTemplateRequest(action) {
  //   const { email, password } = action.payload;
  const response = yield call(
    fireAjax,
    "PUT",
    "templateStructure/updateTemplateStructure",
    action.payload
  );
  if (response && response.status === 200) {
    if (action.payload.add_column) {
      toast.success("Column Added");
      yield put(actions.listTemplateRequest());
      yield put(actions.updateTemplateSuccess(response.data.data));
    } else {
      toast.success("Template Updated");
      yield put(actions.updateTemplateSuccess(response.data.data));
    }
  } else {
    toast.error("Something went wrong!!!");
    yield put(actions.updateTemplateError(response.data.message));
  }
}
