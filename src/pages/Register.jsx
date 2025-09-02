// src/pages/Register.jsx
import { useState } from "react";
import nuLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    nuRegNo: "",
    college: "",
    subject: "",
    mobile: "",
    email: "",
    username: "",
    password: "",
  });

  const colleges = [
    "Dhaka College",
    "Rajshahi College",
    "Chittagong College",
    "Sylhet Government College",
    "Comilla Victoria Government College",
    "Jessore Government City College",
    "Barisal Government College",
    "Rangpur Government College",
    "Mymensingh Government College",
    "Other",
  ];

  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "English",
    "Bangla",
    "Economics",
    "Political Science",
    "History",
    "Philosophy",
    "Sociology",
    "Psychology",
    "Geography",
    "Statistics",
    "Computer Science",
    "Other",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.nuRegNo ||
      !formData.college ||
      !formData.subject ||
      !formData.mobile ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      // alert("অনুগ্রহ করে সব তথ্য পূরণ করুন।");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-[#9BB3EB] flex flex-col items-center justify-center p-6 space-y-6">
      {/* ====== Header outside card ====== */}
      <div className="fixed top-0 flex space-x-4 bg-gradient-to-r from-blue-900 to-blue-900  px-6 py-4  w-full">
        <img src={nuLogo} alt="NU Logo" className="h-16 w-16 rounded-full" />
        <div className="w-full text-center">
          <h1 className="text-2xl font-bold text-white ">National University, Bangladesh</h1>
          
        </div>
      </div>

      {/* ====== Card ====== */}
      <div className=" w-full max-w-lg bg-white shadow-lg rounded-2xl overflow-hidden mt-30">
        {/* Card Header (inside card) */}
        <div className=" text-blue-700 text-center py-4 px-4">
          <h2 className="text-xl font-bold"> Registration Form</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* NU Registration */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              Registration No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: 20240000000"
              value={formData.nuRegNo}
              onChange={(e) => handleChange("nuRegNo", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* College */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              College <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.college}
              onChange={(e) => handleChange("college", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select College</option>
              {colleges.map((college) => (
                <option key={college} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
               Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full mt-1 px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

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
          <Link to="/login">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-900 to-blue-900 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-[1.02] transition-transform"
            >
              Register
            </button>
          </Link>
          <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-700 to-red-700 mt-4 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-[1.02] transition-transform"
            >
              Send OTP to Verify
            </button>
        </form>
      </div>
    </div>
  );
}
