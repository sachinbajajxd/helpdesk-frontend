import React, { useState } from "react";
// import { LoginUser } from "../../apicalls/userAPIcalls";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
        const response = await axios.post("https://helpdesk-backend-mpzl.onrender.com/api/login", user);
        console.log(response);
        toast.success("Login successful, Welcome to MyApp");
        localStorage.setItem("myapp-token", response.data.token);
        navigate("/");
    } catch (error) {
        toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3b5998]">
      <div className="bg-white p-10 pb-4 rounded-3xl shadow-lg w-96 flex flex-col items-center justify-center">
        <div className=" p-4 pt-2 font-medium text-lg">Login to your account</div>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email field */}
          <div className="mb-4">
            <label className="block text-start">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-2 p-2 w-full rounded-md border shadow-sm"
              placeholder="JohnDoe@gmail.com"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label className="block text-start">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="mt-2 p-2 w-full rounded-md border shadow-sm"
              placeholder="********"
            />
          </div>

          <div className=" text-xs pb-4 mb-2 flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="font-semibold">Remember Me</p>
          </div>
          {/* Login button */}
          <button
            type="submit"
            className="bg-[#3b5998] text-white p-2 w-full rounded-sm shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Register navigation link */}
        <div className="mt-6 flex content-center items-center  text-center text-sm">
          <span className="">New to MyApp? </span>
          <Link to="/signup" className="text-[#3b5998]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;