import React, { useState } from "react";
import FileUpload from "./FileUpload";
import Analytics from "./Analytics";

export default function Dashboard() {
  const [refreshCounter, setRefreshCounter] = useState(0);

  const handleImportSuccess = () => {
    // bump counter so Analytics re-fetches
    setRefreshCounter((c) => c + 1);
  };

  return (
    <div className="space-y-10">
      <FileUpload onImportSuccess={handleImportSuccess} />
      <Analytics refreshTrigger={refreshCounter} />
    </div>
  );
}
