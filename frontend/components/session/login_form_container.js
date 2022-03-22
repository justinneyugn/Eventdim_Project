import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'Log in'
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        processForm: user => dispatch(login(user))
    })
}

export default connect(mSTP, mDTP)(SessionForm);