// @flow

import {
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_LOGIN_SUCCESS
} from "../constants/authentication";

const authenticate = (email: string, password: string) => dispatch =>
  email === "student@epita.fr" && password === "secure"
    ? dispatch({ type: AUTHENTICATION_LOGIN_SUCCESS, email })
    : dispatch({ type: AUTHENTICATION_LOGIN_FAILURE });

export default authenticate;
