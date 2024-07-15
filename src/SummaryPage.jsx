// src/SummaryPage.jsx
import React from "react";

const SummaryPage = ({ formData }) => {
  return (
    <div>
      <h1>Submitted Data</h1>
      <p>
        <strong>First Name:</strong> {formData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {formData.lastName}
      </p>
      <p>
        <strong>Work Email:</strong> {formData.workEmail}
      </p>
      <p>
        <strong>Password:</strong> {formData.password}
      </p>
      <p>
        <strong>Organization Name:</strong> {formData.organizationName}
      </p>
      <p>
        <strong>Organization Size:</strong> {formData.organizationSize}
      </p>
      <p>
        <strong>Industry:</strong> {formData.industry}
      </p>
      <p>
        <strong>Terms Accepted:</strong> {formData.termsAccepted ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default SummaryPage;
