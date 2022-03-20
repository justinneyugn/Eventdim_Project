import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div>
        <h1>Eventdim</h1>

        <Route path="/api/sesssion" component={LoginFormContainer} />
        <Route path="/api/users" component={SignupFormContainer} />
    </div>
);

export default App;