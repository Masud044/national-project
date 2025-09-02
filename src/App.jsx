import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/HomeLesson";
// import Quiz from "./pages/Quiz";
// import AI from "./pages/AI";
import QA from "./pages/QA";
import Quiz from "./pages/Quiz";
import AiSupport from "./pages/AiSupport";
import AiNotes from "./pages/AiNotes";
import Video from "./pages/Video";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/video" element={<Video />}>
          <Route path="qa" element={<QA />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="ai-support" element={<AiSupport />} />
          <Route path="ai-notes" element={<AiNotes />} />
        </Route>

        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
