import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'Create an account'
    })
}

const mDTP = (dispatch, ownProps) => {
    return ({
        processForm: formUser => dispatch(signup(formUser))
    })
}

export default connect(mSTP, mDTP)(SessionForm);