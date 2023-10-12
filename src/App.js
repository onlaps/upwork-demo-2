import { createContext, useEffect, useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initialUser, persistUser, userReducer } from "./reducers/user";

import Home from "./pages/Home";
import Login from "./pages/Login";

export const Context = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  const [user, dispatch] = useReducer(userReducer, initialUser, persistUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Context.Provider value={{ user, dispatch }}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
};

export default App;
