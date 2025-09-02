// src/pages/Quiz.jsx
import { Link } from "react-router-dom";
import nuLogo from "../assets/logo.png";

export default function Quiz() {
  return (
    <div className=" min-h-screen  flex flex-col items-center justify-center p-6">
       <div className="w-full max-w-4xl bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">
          📝 Quiz
        </h1>
        <p className="text-sm opacity-90">
        
           📄 Detailed Quiz generated for you
          
        </p>
      </div>

        {/* Content */}
        <div className="p-6 px-2 space-y-6 w-full max-w-4xl">
          {/* <div className="bg-blue-50 border rounded-lg px-4 py-2 text-blue-800">
            <p className="font-medium">👤 User Name: <span className="font-semibold">Student123</span></p>
          </div> */}

          <div className="bg-white py-32  rounded-lg p-6 shadow text-center">
            <h2 className="text-lg font-bold mb-4">Start your Quiz</h2>
            <p className="mb-4">This section will contain multiple-choice questions for your selected subject.</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600">
              ▶ Start Quiz
            </button>
          </div>

          {/* <div className="pt-4">
            <Link to="/dashboard">
              <button className="w-full bg-red-600 text-white py-2 rounded-lg shadow hover:bg-red-700">
                ⬅ Back to Dashboard
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    
  );
}
