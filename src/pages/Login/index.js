import { useContext, useState } from "react";
import { Context } from "../../App";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(Context);

  const onSubmit = async () => {
    if (username && password) {
      dispatch({ type: "LOGIN", payload: { username, password } });
      return navigate("/");
    }

    alert("Please enter username and password");
  };

  return (
    <div className="auth__wrapper">
      <div className="auth__form">
        <span>Please enter any login and password to continue</span>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Page;
