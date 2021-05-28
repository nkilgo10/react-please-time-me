import { LOGIN, LOGOUT } from "../actions/loginActions";

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.email,
        password: action.password,
      };
    case LOGOUT:
      return initialState;
  }
  return state;
};
