export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";
export const LOGOUT = "LOGOUT";

export const login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const signUp = (email, password) => {
  return {
    type: SIGN_UP,
    form: { email, password },
  };
};
