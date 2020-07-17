import React from "react";
import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";

///MY GET REQUEST FROM EXTERNAL DATA
export const getSmurf = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURFS_FAILED, payload: err.res });
      });
  };
};

////MY POST REQUEST FROM DATA
export const NEW_SMURF_START = 'NEW_SMURF_START'
export const NEW_SMURF_SUCCESS = 'NEW_SMURF_SUCCESS'
export const NEW_SMURF_FAILED = 'NEW_SMURF_FAILED'

export const newSmurf = (smurf) => (dispatch) => {
    dispatch({ type: NEW_SMURF_START})

    return axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({type: NEW_SMURF_SUCCESS, payload: res.data}))
    .catch(error => dispatch({ type: NEW_SMURF_FAILED, payload: error}))
}