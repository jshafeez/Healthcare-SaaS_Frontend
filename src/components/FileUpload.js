import React, { useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import "./FileUpload.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [imported, setImported] = useState(false);
  const [importInfo, setImportInfo] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      setCsvData([]);
      setAllData([]);
      setImported(false);
      setImportInfo(null);
    } else {
      alert("❌ Please upload a valid CSV file.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "text/csv") {
      setFile(droppedFile);
      setCsvData([]);
      setAllData([]);
      setImported(false);
      setImportInfo(null);
    } else {
      alert("❌ Please upload a valid CSV file.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        setAllData(result.data);
        setCsvData(result.data.slice(0, 10));
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  const handleImport = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/api/import", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setImported(true);
        setImportInfo(result);
        alert(`✅ Imported ${result.inserted} rows from file ID ${result.fileId}`);

        // 🔥 Fire global event for Dashboard refresh
        window.dispatchEvent(new Event("referrals:imported"));

        // 🔥 Navigate directly to Analytics page for this file
        navigate(`/analytics?fileId=${result.fileId}`);
      } else {
        alert("⚠ Import failed: " + (result.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Import failed:", err);
      alert("⚠ Import failed: " + err.message);
    }
  };

  const handleReview = () => {
    if (!file) return alert("❌ Please select a file first.");
    parseCSV(file);
    setTimeout(() => {
      document
        .getElementById("csv-preview-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-title">File Upload</div>
      <p className="file-upload-subtitle">
        Upload a CSV file (max 50MB) for preview & processing
      </p>

      <div
        className="file-upload-box"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label className="browse-button">
          Browse File
          <input
            type="file"
            accept=".csv"
            className="file-input"
            onChange={handleFileChange}
          />
        </label>
        {file && <p className="selected-file-name">Selected: {file.name}</p>}
      </div>

      <div className="button-group">
        <button
          className="review-button"
          onClick={handleReview}
          disabled={!file}
        >
          Preview
        </button>
        <button
          className="upload-button"
          onClick={handleImport}
          disabled={!file}
        >
          Import
        </button>
      </div>

      {csvData.length > 0 && (
        <div className="csv-preview" id="csv-preview-section">
          <h3>CSV Preview</h3>
          <div className="table-scroll">
            <table className="csv-table">
              <thead>
                <tr>
                  {Object.keys(csvData[0]).map((key, i) => (
                    <th key={i}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((val, j) => (
                      <td key={j}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {imported && importInfo && (
            <p style={{ marginTop: "10px", color: "green", fontWeight: "500" }}>
              ✅ Imported <b>{importInfo.inserted}</b> rows successfully (File ID:{" "}
              {importInfo.fileId})
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
