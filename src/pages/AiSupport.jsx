// src/pages/AI.jsx
import { Link } from "react-router-dom";

export default function AiSupport() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4">
    <div className="w-full max-w-4xl bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">
          🤖 Ai-Support
        </h1>
        <p className="text-sm opacity-90">
        
           📄 Detailed Ai-Support generated for you
          
        </p>
      </div>
        {/* Content */}
        <div className="p-6 px-2 space-y-6 w-full max-w-4xl">
          {/* <div className="bg-blue-50 border rounded-lg px-4 py-2 text-blue-800">
            <p className="font-medium">👤 User Name: <span className="font-semibold">Student123</span></p>
          </div> */}

          <div className="bg-white  rounded-lg p-6 py-8 shadow">
            <h2 className="text-lg font-bold mb-4">Ask your question to AI</h2>
            <textarea
              className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
              rows={10}
              placeholder="Type your question here..."
            ></textarea>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-700">
              💬 Ask AI
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
