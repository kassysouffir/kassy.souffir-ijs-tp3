import React from 'react';
import { connect } from 'react-redux';
import LoginLayout from '../layouts/authentication/Login';

const isLogged = Component => {
    const check = props => {
        if ( props.authentication.isLoggedIn) {
            return <Component />;
        }
        return <LoginLayout />;
    };

    const mapStateToProps = ({ authentication }) => ({ authentication });

    return connect(mapStateToProps)(check);
};

export default isLogged;