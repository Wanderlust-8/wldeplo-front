import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  FETCH_USERS,
  GET_USER_BY_ID,
  SEARCH_USERS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  CHECKUSER_SHOPPING,
} from "./usersActions";

const initialState = {
  usersList: [],
  usersFiltered: [],
  usersSearch: [],
  userDetails: {},
  user: null,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        usersList: action.payload,
        usersFiltered: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userDetails: action.payload,
      };
    case SEARCH_USERS:
      console.log("SEARCH_USERS payload:", action.payload); // <-- add this line
      return {
        ...state,
        usersSearch: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
      };
    case EDIT_USER:
      return {
        ...state,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CHECKUSER_SHOPPING:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
