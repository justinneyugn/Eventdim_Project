import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.link = this.link.bind(this);
        this.errors = this.errors.bind(this);
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen(() => {
            this.props.removeErrors();
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }

    updatePassword(e){
        this.setState({password: e.target.value})
    }

    link() {
        if (this.props.formType === 'Create an account') {
            return (
                <div>
                    <Link to='/signup' className="session-other-links link">Sign up with Google</Link>
                    <br />
                    <Link to='/signup' className="session-other-links link">Sign up with Facebook</Link>
                    <br />
                    <Link to='/signup' className="session-other-links link">Sign up with Apple</Link>
                    <br />
                    <Link className="session-link link" to='/signin'>Log In</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to='/signin' className="session-other-links link">Sign in with Google</Link>
                    <br />
                    <Link to='/signin' className="session-other-links link">Sign in with Facebook</Link>
                    <br />
                    <Link to='/signin' className="session-other-links link">Sign in with Apple</Link>
                    <br />
                    <Link className="session-link link" to='/signup'>Sign up for Eventdim</Link>
                </div>
            )
        }
    }

    
    errors(){
        return (
            <ul>
                {this.props.errors.map( (error, idx) => {
                    return (
                        <li key={`error-${idx}`}>{error}</li>
                    )
                })}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-container">
                <h1 className="session-logo"><a href="http://localhost:3000/#/" className='website_name'>eventdim</a></h1>
                <h1 className="session-type">{this.props.formType}</h1>
                <div className="session-errors">{this.errors()}</div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label className="session-email">Email address
                        <input 
                            type="text"
                            onChange={this.updateEmail}
                            value={this.state.email}
                        />
                    </label>
                    <br />
                    <label className="session-password">Password
                        <input 
                            type="password"
                            onChange={this.updatePassword}
                            value={this.state.password}
                        />
                    </label>
                    <br />
                    <button className= "session-button" type="submit">{this.props.formType}</button>
                </form>
                <br />
                <p className="session-or">or</p>
                <br />
                {this.link()}
            </div>
        )
    }
}

export default SessionForm;