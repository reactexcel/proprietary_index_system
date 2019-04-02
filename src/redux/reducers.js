import { combineReducers } from "redux";
import signup from "./signup/reducer";
import login from "./login/reducer";
import notes from "./notes/reducer";
import addNote from "./addNote/reducer";
import updateNote from "./updateNote/reducer";
import deleteNote from "./deleteNote/reducer";
import addTranche from "./addTranche/reducer";
import template from "./template/reducer";

const rootReducer = combineReducers({
  signup,
  login,
  notes,
  addNote,
  updateNote,
  deleteNote,
  addTranche,
  template
});

export default rootReducer;
