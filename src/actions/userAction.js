import axios from 'axios';
import {returnErrors } from './errorAction';

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


// Check token & load user
export const loadUser = () => (dispatch, getState) => {

    // User loading
    dispatch({ type: USER_LOADING});

    // Get token from localstorage
    const token = getState().authUser.token;

    //Headers 

    const config = {
        header:{
            "Content-type": "application/json"
        }
    }

    // if token, add to header
    if(token) {
        config.headers['auth-token'] = token;
    }

    console.log("this is the token", token)

    // Get token from localstorage
    axios.get('/users', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })


}