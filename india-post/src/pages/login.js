import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftPanel from "../components/LoginLeftPanel";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import logo from "../assets/logo.png";
import axios from "axios"

function Login() {
  const [userID, setID] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/',{ userID, password})
    .then(result=> console.log(result))
    .catch(err=> console.log(err))
  }

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F7F7F9] overflow-hidden">
      {" "}
      {/* Overflow hidden applied here */}
      <LeftPanel currentStep={currentStep} />
      <div className="flex-1 flex flex-col px-4 lg:px-0">
        <header className="flex items-center justify-between p-4 xl:mx-12">
          <img
            src={logo}
            alt="India Post Logo"
            className="h-[80px] sm:h-[100px] w-auto"
          />
          <div className="flex space-x-4">
            <button
              type="button"
              className="border border-k1 bg-[#F7F7F9] text-black font-bold py-2 px-4 rounded-md flex items-center"
            >
              <ErrorRoundedIcon className="mr-2 text-k1" />
              Quick Access
            </button>
            <button
              type="button"
              className="border border-k1 bg-[#F7F7F9] text-black font-bold py-2 px-4 rounded-md flex items-center"
            >
              <HelpRoundedIcon className="mr-2 text-k1" />
              Contact Help
            </button>
          </div>
        </header>
        <div className="flex justify-center">
          <div className="h-[2px] w-full max-w-screen-xl bg-gray-200"></div>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-20">
          <div className="bg-white rounded-lg border p-6 sm:p-8 lg:p-10 w-full max-w-md sm:max-w-lg xl:max-w-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-k1 p-2 rounded-md">
                <PersonRoundedIcon className="text-white" fontSize="large" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-PSB">Get Started</h2>
              <p className="text-gray-400">Don't have an account?</p>
            </div>
            <div className="flex justify-center mt-5 mb-8">
              <div className="h-px w-full bg-gray-200"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="userID"
                    className="block text-lg font-PSB text-gray-700 mb-2"
                  >
                    India Post Office ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MailOutlineRoundedIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="userID"
                      placeholder="Office ID"
                      value={userID}
                      onChange={(e) => setID(e.target.value)}
                      
                      className="border rounded-md pl-10 py-3 w-full bg-[#F7F7F9] focus:outline-none focus:ring-k1 focus:border-k1 text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg font-PSB text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <LockOutlinedIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPass(e.target.value)}
                      className="border rounded-md pl-10 py-3 w-full bg-[#F7F7F9] focus:outline-none focus:ring-k1 focus:border-k1 text-gray-600"
                    />
                  </div>
                </div>
              </div>
              <div className="text-right mt-4">
                <a
                  href="#"
                  className="relative font-medium font-PSB text-k1 group"
                >
                  Forgot password?
                  <span className="absolute left-1/2 bottom-[-8px] transform -translate-x-1/2 w-0 h-0.5 bg-k1 group-hover:w-1/2 transition-all duration-300 ease-in-out"></span>
                </a>
              </div>
              <div className="flex justify-center mt-6">
                <div className="h-px w-full bg-gray-200"></div>
              </div>
              <div className="flex justify-end flex-col  mt-2 align-middle">
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="border border-k1 bg-white text-black font-bold py-3 px-5 rounded-md"
                >
                  <CreateRoundedIcon className="ml-[-2px] mr-2" />
                  Register
                </button>
                <button
                  type="submit"
                  className="bg-k1 text-white font-bold py-3 w-full mt-2 px-5 rounded-md"
                  onSubmit={handleSubmit}
                >
                  <LoginRoundedIcon className="ml-[-2px] mr-2" />
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
