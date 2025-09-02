import { Link, Outlet, useLocation } from "react-router-dom";

export default function Video() {
  const location = useLocation();
  

  // Receive subject, topic, lecture, and video url via state
   const { subject, topic, lecture, videoUrl } = location.state || {};

  // if (!videoUrl) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center">
  //       <p className="text-red-600 font-semibold">❌ No video selected.</p>
  //       <button
  //         onClick={() => navigate(-1)}
  //         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
  //       >
  //         🔙 Go Back
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-[#9BB3EB] flex flex-col items-center p-6">
      {/* <h1 className="text-2xl font-bold mb-2">{subject} - {topic}</h1>
      <p className="mb-4 text-lg">{lecture}</p> */}

      <video
        src={videoUrl}
        controls
        autoPlay
        className="w-full max-w-5xl rounded-lg shadow-lg"
      >
        Your browser does not support the video tag.
      </video>
<div className="flex flex-wrap gap-4 mt-4 justify-center">
  <Link to="qa" className="flex-1 min-w-[170px]">
    <button className="w-full bg-green-600 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700">
      ❓ Q&A
    </button>
  </Link>

  <Link to="quiz" className="flex-1 min-w-[170px]">
    <button className="w-full bg-yellow-500 text-white py-2 px-6 rounded-lg shadow hover:bg-yellow-600">
      📝 Quiz
    </button>
  </Link>

  <Link to="ai-support" className="flex-1 min-w-[170px]">
    <button className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg shadow hover:bg-purple-700">
      🤖 AI Support
    </button>
  </Link>

  <Link to="ai-notes" className="flex-1 min-w-[170px]">
    <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700">
      ✍️ AI Notes
    </button>
  </Link>
</div>



      <div className="w-full max-w-4xl">
          <Outlet />
        </div>

      <Link to="/dashboard"><button
        
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700"
      >
       Back to Dashboard
      </button></Link>
    </div>
  );
}
