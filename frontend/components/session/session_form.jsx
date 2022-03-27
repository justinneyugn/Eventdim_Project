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
                    <Link className="session-link link" to='/signin'>Log In</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link className="session-link link" to='/signup'>Sign up for Eventdim</Link>
                </div>
            )
        }
    }

    
    errors(){
        return (
            <ul className="errors-ul">
                {this.props.errors.map( (error, idx) => {
                    return (
                        <li className="errors-li" key={`error-${idx}`}>{error}</li>
                    )
                })}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-container">
                <div className="session-inner">
                    <h1 className="session-logo"><a href="http://localhost:3000/#/" className='website_name'>eventdim</a></h1>
                    <h1 className="session-type">{this.props.formType}</h1>
                    <div className="session-errors">{this.errors()}</div>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <div className="session-input-outer">
                            <div className="session-input-inner">
                                <label className="input-prompt">Email address</label>
                                <br />
                                <input 
                                    type="email"
                                    onChange={this.updateEmail}
                                    value={this.state.email}
                                    className="session-input"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="session-input-outer">
                            <div className="session-input-inner">
                                <label className="input-prompt">Password</label>
                                <br />
                                <input 
                                    type="password"
                                    onChange={this.updatePassword}
                                    value={this.state.password}
                                    className="session-input"
                                />
                            </div>
                        </div>
                        <br />
                        <button className= "session-button" type="submit">{this.props.formType}</button>
                    </form>
                    <br />
                    <div className="line-and-oval">
                        <hr></hr>
                        <div className="session-or-container">
                            <p className="session-or">or</p>
                        </div>
                        <hr></hr>
                    </div>
                    <br />
                    {this.link()}
                </div>
                <div className="session-image">
                    <img src="https://eventdim-seeds.s3.us-west-1.amazonaws.com/signin_signup.jpeg"></img>
                </div>
            </div>
        )
    }
}

export default SessionForm;