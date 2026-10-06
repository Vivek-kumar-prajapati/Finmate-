import LoginContext from "./LoginContext";
import { useState } from "react";
import axios from "axios";

function LoginProvider({ children }) {
  const [loginFlag, setLoginFlag] = useState(false);

  async function loginUser(login) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        login
      );

      if (response.data.login === true || response.data.login === "true") {
        setLoginFlag(true);
      } else {
        setLoginFlag(false);
        alert(response.data.message || "Unable to login");
      }
    } catch (error) {
      setLoginFlag(false);
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  }

  const value = {
    loginFlag,
    setLoginFlag,
    loginUser,
  };

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
