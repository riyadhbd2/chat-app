import React, { useState } from "react";
import assets from "../../src/assets/assets";
import { signUp, login } from "../config/firebase";


const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if (currState === "Sign Up") {
      signUp(userName, email, password);
      
    }
    else{
      login(email, password)
    }
  }

  return (
    <div className="min-h-screen bg-[url(background.png)] bg-cover bg-center bg-no-repeat flex justify-center items-center gap-6">
      <img className="w-[max(20vw,200px)]" src={assets.logo_big} alt="" />
      <form onSubmit={onSubmitHandler} className="bg-white px-5 py-5 flex flex-col gap-5 rounded-lg">
        <h2 className="font-medium">{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="pl-2 pr-2 border border-neutral-300 rounded-md"
            type="text"
            name="name"
            id="name"
            placeholder="username"
            required
          />
        ) : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="pl-2 pr-2 border border-neutral-300 rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="email address"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="pl-2 pr-2 border border-neutral-300 rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        />
        {currState === "Sign Up" ? (
          <button
            className="p-2 bg-blue-500 text-white text-sm border-0 rounded-md"
            type="submit"
          >
            Create Account
          </button>
        ) : (
          <button
            className="p-2 bg-blue-500 text-white text-sm border-0 rounded-md"
            type="submit"
          >
            Login
          </button>
        )}
        <div className="flex gap-1 text-sm text-gray-400">
          <input type="checkbox" name="" id="" />
          <p>Agree term =s and condition</p>
        </div>
        <div className="flex flex-col gap-1">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <span
                className="font-medium text-blue-400"
                onClick={() => setCurrState("Login")}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Create an account{" "}
              <span
                className="font-medium text-blue-400"
                onClick={() => setCurrState("Sign Up")}
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
