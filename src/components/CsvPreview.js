import React from 'react';
import './CsvPreview.css';

export default function CsvPreview({ data }) {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="csv-preview-container">
      <h3>CSV Preview</h3>
      <div className="csv-preview-table-wrapper">
        <table className="csv-preview-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((row, idx) => (
              <tr key={idx}>
                {headers.map((header) => (
                  <td key={header}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p>Showing first 10 rows</p>
      </div>
    </div>
  );
}
