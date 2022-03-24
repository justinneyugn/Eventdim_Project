import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, removeErrors } from "../../actions/session_actions";

const mSTP = ({errors }) => {
    return ({
        errors: errors.session,
        formType: 'Create an account'
    })
}

const mDTP = (dispatch) => {
    return ({
        processForm: formUser => dispatch(signup(formUser)),
        removeErrors: () => dispatch(removeErrors())
    })
}

export default connect(mSTP, mDTP)(SessionForm);