import { connect } from "react-redux";
import React from "react";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mSTP = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'Log in'
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        processForm: user => dispatch(login(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);