import { useContext } from "react";
import { Context } from "../../App";
import { Navigate } from "react-router-dom";

const Page = () => {
  const { dispatch, user } = useContext(Context);

  if (!user?.token) {
    return <Navigate to="/login" />;
  }

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div>Hi, Marcus!</div>
      <br />
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default Page;
