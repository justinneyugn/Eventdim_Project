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
                <Link to='/signin'>Log In</Link>
            )
        } else {
            return (
                <Link to='/signup'>Sign up for Eventdim</Link>
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
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email address</label>
                    <input 
                        type="text"
                        onChange={this.updateEmail}
                        value={this.state.email}
                    />
                    <br />
                    <label>Password</label>
                    <input 
                        type="password"
                        onChange={this.updatePassword}
                        value={this.state.password}
                    />
                    <br />
                    <button type="submit">{this.props.formType}</button>
                </form>
                <p>or</p>
                {this.link()}
                {this.errors()}
            </div>
        )
    }
}

export default SessionForm;