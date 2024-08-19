import React from 'react';

export default function EducationInputs({ education, changeEducation }) {
  const { institution, degree, dates } = education[0];

  return (
    <form className="personal-detail-form">
      <h2>Education</h2>
      <label>
        Institution:
        <input
          type="text"
          name={institution}
          value={institution}
          onChange={changeEducation}
        />
      </label>
      <label>
        Degree:
        <input
          type="text"
          name={degree}
          value={degree}
          onChange={changeEducation}
        />
      </label>
      <label>
        Dates:
        <input
          type="text"
          name={dates}
          value={dates}
          onChange={changeEducation}
        />
      </label>
    </form>
  );
}
