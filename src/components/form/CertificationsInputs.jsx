import React, { useState } from 'react';

export default function CertificationsInputs({
  certifications,
  changeCertifications,
}) {
  const [activeId, setActiveId] = useState(0);
  const { certification } = certifications[activeId];

  return (
    <form className="personal-detail-form">
      <h2>Certifications</h2>
      <label>
        Certification:
        <input
          type="text"
          name="certification"
          value={certification}
          onChange={(event) => changeCertifications(event, activeId)}
        />
      </label>
    </form>
  );
}
