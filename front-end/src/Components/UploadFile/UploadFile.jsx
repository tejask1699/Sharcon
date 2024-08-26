import React, { useState } from "react";
import "./uploadfile.css";
import Navbar from "../Navbar/Navbar";
function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Upload successful");
        setFile("");
      } else {
        alert("Upload failed");
        setFile("");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Upload failed");
      setFile("");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <form>
        <label>Upload file(.png,.jpeg,.mp4,.mpeg) only </label>
        <br /><br />
        <div className="row">
          <input
            className="uploadInput"
            type="file"
            onChange={handleFileChange}
          />
          <button className="uploadBtn" onClick={handleSubmit} type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadFile;
