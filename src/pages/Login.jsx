// src/pages/Login.jsx
import { useState } from "react";
import nuLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      // alert("⚠️ অনুগ্রহ করে ইউজারনেম ও পাসওয়ার্ড লিখুন।");
      return;
    }
    // API call goes here
  };

  return (
    <div className="min-h-screen bg-[#9BB3EB] flex  flex-col items-center justify-center p-6 space-y-6">
      {/* ===== Header outside the card ===== */}
      <div className="fixed top-0 left-0 flex items-center bg-gradient-to-r from-blue-900 to-blue-900 px-6 py-4 w-full">
        <img src={nuLogo} alt="NU Logo" className="h-16 w-16 rounded-full" />
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold text-white">
            National University, Bangladesh
          </h1>
          
        </div>
      </div>

      {/* ===== Card ===== */}
      <div className="w-full max-w-[475px] bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Card Header */}
        <div className=" text-center py-4 px-4 text-blue-700">
          <h2 className="text-xl font-bold">Login Form</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit */}
          <Link to="/dashboard">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-[1.02] transition-transform"
            >
              Login
            </button>
          </Link>

          {/* Register link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Create your account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
