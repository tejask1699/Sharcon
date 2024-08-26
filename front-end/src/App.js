import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFile from "./Components/UploadFile/UploadFile";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/upload" element={<UploadFile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
