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

    render() {
        let link = () => {
            if (this.props.formType === 'signup') {
                return (
                    <Link to='/api/session'>Log In</Link>
                )
            } else {
                return (
                    <Link to='/api/users'>Sign Up</Link>
                )
            }
        }

        let errors = () => {
            if (this.props.errors) {
                return (
                    <ul>
                        {this.props.errors.map( error => {
                            return (
                                <li>{error}</li>
                            )
                        })}
                    </ul>
                )
            }
        }

        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input 
                        type="text"
                        onChange={this.updateEmail}
                        value={this.state.email}
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        onChange={this.updatePassword}
                    />
                    <button type="submit" value={this.props.formType}/>
                </form>
                { link }
                { errors }
            </div>
        )
    }
}

export default SessionForm;