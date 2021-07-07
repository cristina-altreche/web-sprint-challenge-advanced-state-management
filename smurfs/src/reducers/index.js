import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILED,
  NEW_SMURF_START,
  NEW_SMURF_FAILED,
  NEW_SMURF_SUCCESS,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
        smurfs: action.payload,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        smurfs: action.payload,
      };
    case FETCH_SMURFS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case NEW_SMURF_START:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: true,
        error: "",
      };
    case NEW_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: "",
      };
    case NEW_SMURF_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
