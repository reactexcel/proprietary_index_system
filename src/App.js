import React, { Component } from "react";
import "./styles/App.scss";
import RootRouter from "./RootRouter";
import Login from "./components/login";
import Signup from "./components/signup";
import HomePage from "./components/homepage";
import Notes from "./components/notes";
import AddNote from "./components/addNote";
import AddTranche from "./components/addTranche";
import RequestIsin from "./components/RequestISIN";
import EmailToDirector from "./components/emailToDirector";
import Documents from "./components/documents";
import TermSheet from "./components/termSheet";
import GlobalNote from "./components/globalNote";
import Submissions from "./components/submissions";
import SubmissionMail from "./components/submissionMail";
import CalenderPage from "./components/calender";
import CalenderInputs from "./components/calenderInputs";
import PastEventType from "./components/pastEventType";
import AlertType from "./components/alertType";
import BackendAccess from "./components/BackendAccess";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import UpdateTemplate from "./components/UpdateTemplate";
import TemplatesList from "./components/TemplatesList";
import RedeemNote from "./components/RedeemNote";
import ViewNotes from "./components/ViewNotes";
import EmailBlock from "./components/emailBlock";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <RootRouter>
            <Switch>
              <Route path="/redeemnote" component={RedeemNote} />
              <Route path="/templatelist" component={TemplatesList} />
              <Route path="/viewnotes/:template_id" component={ViewNotes} />
              <Route
                path="/updatetemplate/:template_id"
                component={UpdateTemplate}
              />
              <Route path="/emailblock" component={EmailBlock} />
              <Redirect from="/updatetemplate" to="/templatelist" />
              <Route path="/backend" component={BackendAccess} />
              <Route path="/alerttype" component={AlertType} />
              <Route path="/pasteventtype" component={PastEventType} />
              <Route path="/calenderinputs" component={CalenderInputs} />
              <Route path="/calendar" component={CalenderPage} />
              <Route path="/submissionmail" component={SubmissionMail} />
              <Route path="/submissions" component={Submissions} />
              <Route path="/globalnote" component={GlobalNote} />
              <Route path="/termsheet" component={TermSheet} />
              <Route path="/documents" component={Documents} />
              <Route path="/sendemailtodirectors" component={EmailToDirector} />
              <Route path="/requestisin" component={RequestIsin} />
              <Route path="/addtranche" component={AddTranche} />
              <Route path="/addnote" component={AddNote} />
              <Route path="/notes" component={Notes} />
              <Route path="/homepage" component={HomePage} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Login} />
            </Switch>
            <ToastContainer />
          </RootRouter>
        </Router>
      </Provider>
    );
  }
}

export default App;
