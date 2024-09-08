import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftPanel from "../components/LoginLeftPanel";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import logo from "../assets/logo.png";
import axios from "axios"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    userid: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.name || !formData.userid || !formData.password) {
        alert('All fields are required.');
        return;
      }
  
      const res = await axios.post('http://localhost:5000/register', formData);
      console.log(res.data);
      // Redirect to login page after successful registration
      navigate('/');
    } catch (err) {
      console.error(err);
      // Optionally, show an error message to the user
      alert("Error registering user. Please try again.");
    }
  };

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
              <h2 className="text-xl font-PSB">Register</h2>
              <p className="text-gray-400">Don't have an account?</p>
            </div>
            <div className="flex justify-center mt-5 mb-8">
              <div className="h-px w-full bg-gray-200"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-PSB text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MailOutlineRoundedIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      
                      className="border rounded-md pl-10 py-3 w-full bg-[#F7F7F9] focus:outline-none focus:ring-k1 focus:border-k1 text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="userid"
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
                      name="userid"
                      placeholder="Office ID"
                      value={formData.userid}
                      onChange={handleChange}
                      
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
                      value={formData.password}
                      onChange={handleChange}
                      className="border rounded-md pl-10 py-3 w-full bg-[#F7F7F9] focus:outline-none focus:ring-k1 focus:border-k1 text-gray-600"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <div className="h-px w-full bg-gray-200"></div>
              </div>
              <div className="flex justify-end flex-col  mt-2 align-middle">
                <button
                  type="submit"
                  className="bg-k1 text-white font-bold py-3 w-full mt-2 px-5 rounded-md"
                >
                  <CreateRoundedIcon className="ml-[-2px] mr-2" />
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
