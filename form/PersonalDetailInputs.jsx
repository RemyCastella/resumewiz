import React from 'react';

export default function PersonalDetailInputs({
  personalDetails,
  changePersonalDetails,
}) {
  return (
    <form className="personal-detail-form">
      <h2>Personal Details</h2>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={personalDetails.fullName}
          onChange={changePersonalDetails}
        />
      </label>
      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          value={personalDetails.jobTitle}
          onChange={changePersonalDetails}
        />
      </label>
      <label>
        TEL:
        <input
          type="text"
          name="tel"
          value={personalDetails.tel}
          onChange={changePersonalDetails}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={personalDetails.email}
          onChange={changePersonalDetails}
        />{' '}
      </label>
      <label>
        Website:
        <input
          type="text"
          name="website"
          value={personalDetails.website}
          onChange={changePersonalDetails}
        />{' '}
      </label>
    </form>
  );
}
