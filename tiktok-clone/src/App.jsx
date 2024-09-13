import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoFeed from "./Components/VideoFeed";
import Login from "./Components/Login";

function App() {
  return (
    <div className="flex flex-col justify-center items-center p-14 rounded-md">
      <Router>
        <Routes>
          {/* Serve the login page for the root route */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<VideoFeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
