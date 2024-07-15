// src/App.jsx
import React, { useState } from "react";
import FormPage from "./FormPage.jsx";
import SummaryPage from "./SummaryPage.jsx";

const App = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div>
      {formData ? (
        <SummaryPage formData={formData} />
      ) : (
        <FormPage setFormData={setFormData} />
      )}
    </div>
  );
};

export default App;
