import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Protected = ({ loggedIn, path, component: Component}) => (
    <Route 
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )}
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Protected)
)