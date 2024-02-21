import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
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
        const response = await axios.post("https://helpdesk-backend-mpzl.onrender.com/api/signup", user);
        console.log(response);
        toast.success("Signup successful, Login to continue");
        navigate("/login");
    } catch (error) {
        toast(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3b5998]">
      <div className="bg-white p-10 pb-4 rounded-3xl shadow-lg w-96 flex flex-col items-center justify-center">
        <div className=" p-4 pt-2 font-medium text-lg">Create Account</div>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Name field */}
          <div className="mb-4">
            <label className="block text-start">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-2 p-2 w-full rounded-md border shadow-sm"
              placeholder="John Doe"
            />
          </div>
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
          {/* Register button */}
          <button
            type="submit"
            className="bg-[#3b5998] text-white p-2 w-full rounded-sm shadow-sm"
          >
            Sign Up
          </button>
        </form>

        {/* Register navigation link */}
        <div className="mt-6 flex content-center items-center  text-center text-sm">
          <span className="">Already have an account? </span>
          <Link to="/login" className="text-[#3b5998]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;