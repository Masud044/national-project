// src/pages/Dashboard.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import nuLogo from "../assets/logo.png";
import video1 from "../assets/video/video1.mp4";

export default function Dashboard() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedLecture, setSelectedLecture] = useState("");
  const navigate = useNavigate();

  const subjects = ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"];
  const topics = ["Topic 1", "Topic 2", "Topic 3"];
  const lectures = [
    { name: "Lecture 1", url: video1 },
    { name: "Lecture 2", url: video1 },
    { name: "Lecture 3", url: video1 },
  ];

  const handlePlay = () => {
    const lecture = lectures.find((lec) => lec.name === selectedLecture);
    if (lecture && selectedSubject && selectedTopic) {
      navigate("/video", {
        state: {
          subject: selectedSubject,
          topic: selectedTopic,
          lecture: lecture.name,
          videoUrl: lecture.url,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#9BB3EB] flex flex-col items-center justify-center p-4 space-y-6">
      
      {/* 🔹 University Header outside card */}
      <div className="fixed top-0 flex items-center gap-3 w-full  bg-gradient-to-r from-blue-900 to-blue-900 px-6 py-4 ">
        <img src={nuLogo} alt="NU Logo" className="h-14 w-14 rounded-full bg-white p-2 shadow" />
        <h1 className="text-2xl font-bold text-center w-full text-white">National University, Bangladesh</h1>
         
        
      </div>
     

      {/* 🔹 Main Card */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl overflow-hidden p-6 space-y-6 mt-30">
        {/* User info */}
        <div className="bg-blue-50 border rounded-lg px-4 py-2 text-blue-800">
          <p className="font-medium">
            👤 User Name: <span className="font-semibold">Student123</span>
          </p>
        </div>

        {/* Subject select */}
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">Select Your Subject</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Select Subject --</option>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Topic select */}
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">Topics</label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Select Topic --</option>
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Lecture select */}
        <div>
          <label className="block text-sm font-medium text-blue-700 mb-1">Lecture</label>
          <select
            value={selectedLecture}
            onChange={(e) => setSelectedLecture(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">-- Select Lecture --</option>
            {lectures.map((lec) => (
              <option key={lec.name} value={lec.name}>{lec.name}</option>
            ))}
          </select>
        </div>

        {/* Play button */}
        <div className="text-center">
          <button
            onClick={handlePlay}
            className="bg-blue-900 text-white py-2 px-3 rounded-lg shadow hover:bg-blue-900 w-full"
          >
            ▶ Play Video
          </button>
        </div>

        {/* Logout */}
        <div className="pt-4">
          <Link to="/login">
            <button className="w-full bg-red-600 text-white py-2 rounded-lg shadow hover:bg-red-700">
              🚪 Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
