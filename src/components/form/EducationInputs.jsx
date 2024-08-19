import React, { useState } from 'react';

export default function EducationInputs({ education, changeEducation }) {
  const [activeId, setActiveId] = useState(0);
  const { institution, degree, dates } = education[activeId];

  return (
    <form className="personal-detail-form">
      <h2>Education</h2>
      <label>
        Institution:
        <input
          type="text"
          name="institution"
          value={institution}
          onChange={(event) => changeEducation(event, activeId)}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={(event) => changeEducation(event, activeId)}
        />
      </label>
      <label>
        Dates:
        <input
          type="text"
          name="dates"
          value={dates}
          onChange={(event) => changeEducation(event, activeId)}
        />
      </label>
    </form>
  );
}
