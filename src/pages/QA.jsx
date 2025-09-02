// src/pages/QA.jsx
import { Link } from "react-router-dom";

export default function QA() {
  return (
    <div className="min-h-screen flex-col  flex items-center justify-center p-6">
       <div className="w-full max-w-4xl bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">
          ❓ Q&A
        </h1>
        <p className="text-sm opacity-90">
        
           📄 This is a discussion forum on this related topic!
          
        </p>
      </div>
      {/* Content */}
      <div className="p-6 px-2  space-y-6 w-full max-w-4xl  rounded-2xl">
        <div className=" py-8  rounded-lg p-6 bg-white shadow">
          <h2 className="text-lg font-bold mb-2">Post a question</h2>
          <textarea
            className="w-full border rounded-lg p-2 mb-2 py-4  focus:ring-2 focus:ring-blue-500 outline-none"
            rows={10}
            placeholder="Type your question here..."
          ></textarea>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700">
            📨 Submit
          </button>
        </div>
      </div>
    </div>
  );
}
