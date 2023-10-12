export const initialUser = {
  token: null,
};

export const persistUser = () =>
  JSON.parse(localStorage.getItem("user")) || initialUser;

export const userReducer = (payload, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        token: ":token:",
      };
    }
    case "LOGOUT": {
      return initialUser;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
