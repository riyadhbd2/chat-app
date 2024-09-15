import React, { useState } from "react";
import assets from "../../src/assets/assets";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="min-h-screen bg-[url(background.png)] bg-cover bg-center bg-no-repeat flex justify-center items-center gap-6">
      <img className="w-[max(20vw,200px)]" src={assets.logo_big} alt="" />
      <form className="bg-white px-5 py-5 flex flex-col gap-5 rounded-lg">
        <h2 className="font-medium">{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            className="pl-2 pr-2 border border-neutral-300 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="username"
            required
          />
        ) : null}
        <input
          className="pl-2 pr-2 border border-neutral-300 rounded-md"
          type="email"
          name=""
          id=""
          placeholder="email address"
          required
        />
        <input
          className="pl-2 pr-2 border border-neutral-300 rounded-md"
          type="password"
          name=""
          id=""
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
