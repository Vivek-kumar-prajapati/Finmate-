import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";
 
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { loginUser ,loginFlag, } = useContext(LoginContext);
  const navigate = useNavigate();
  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [key]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    loginUser(login);
    if(loginFlag){
        navigate("/");
    }
  }

  return (
    <>
      <div className="main min-h-screen  flex justify-center items-center gap-2">
        <div className="left_container flex flex-col items-start gap-5 w-[40%] h-screen  p-5 ">
          <div className="flex items-center   w-full justify-center   gap-2 font-bold text-gray-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-sm text-white">
              ✓
            </span>
            FinMate
          </div>

          <div className="flex flex-col w-full gap-1 text-center">
            <h3 className="text-xl font-bold">Login to Your Account</h3>
            <p>and start your financial journey</p>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <label className="text-xl m-2 ">Email Address</label>
            <br />
            <input
              className=" w-full border-2 border-b-mist-600 rounded-xl h-8 m-2 p-3"
              type="text"
              name="email"
              placeholder="ENTER YOUR Email Address"
              onChange={handleChange}
              value={login.email}
            />
            <br />

            <label className="text-xl m-2 ">Password</label>
            <br />
            <input
              className=" w-full border-2 border-b-mist-600 rounded-xl h-8 m-2 p-3"
              type="text"
              name="password"
              placeholder="ENTER YOUR Password"
              onChange={handleChange}
              value={login.password}
            />
            <br />

            <div className=" flex justify-start items-center gap-1 m-2">
              <input type="checkbox" />
              <span>
                I agree to{" "}
                <span className="text-green-800 font-bold">
                  Terms & Conditions
                </span>{" "}
              </span>
            </div>

            <button className="w-full bg-green-500 p-2 rounded-xl  text-white">
              Create Account{" "}
            </button>
          </form>

          <p className="w-full text-center text-xl text-black">
            ---------- or continue With -----------
          </p>

          <div className=" w-full  flex items-center justify-center  gap-5">
            <div className=" border-2 p-1 w-20 rounded-xl text-center border-gray-300">
              <p>Google</p>
            </div>
            <div className="border-2 p-1 w-20 rounded-xl text-center border-gray-300">
              <p>GitHub</p>
            </div>
          </div>

          <p className="w-full text-center text-black text-[18px]">
            {" "}
            Already have an account ?{" "}
            <Link to="/signup" className="text-green-700">
              Sign Up
            </Link>{" "}
          </p>
        </div>

        <div className=" w-[60%] bg-[url('https://media.istockphoto.com/id/1155116292/vector/sign-up-green-background.jpg?s=170667a&w=0&k=20&c=aI4xZNrFEfJlH_C3jrUdoQajd4UqsLrZmniNUXy2K5Y=')] bg-cover bg-center  h-screen border-2   p-2 rounded-2xl"></div>
      </div>
    </>
  );
}

export default Login;
