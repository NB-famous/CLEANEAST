import axios from 'axios';
import { returnErrors } from '../../../actions/errorAction';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './types';


export interface ITarget {
    target: {
      value: React.SetStateAction<string>;
    };
    preventDefault(): void;
  }

  export interface IAuthForm {
    isAuthenticated?: boolean;
    error: IError;
    clearErrors(): void;
  }

  export interface ILogin extends IAuthForm {
    login(user: IUser): void;
  }

  // Login User
export const login = ({ email, password }: IAuthFunction) => (
    dispatch: Function
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ email, password });
  
    axios
      .post('http://localhost:5000/users/login', body, config)
      .then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: LOGIN_FAIL
        });
      });
  };