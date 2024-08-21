import React, { useState } from 'react';
import { IoChevronForward, IoChevronDownOutline } from 'react-icons/io5';

export default function PersonalDetailInputs({
  personalDetails,
  changePersonalDetails,
}) {
  const [view, setView] = useState('form');

  if (view === 'closed') {
    return (
      <div className="personal-detail-form">
        <div className="form-header" onClick={() => setView('form')}>
          <h2>Personal Details</h2>
          <IoChevronForward size={30} />
        </div>
      </div>
    );
  }

  if (view === 'form') {
    return (
      <section className="personal-detail-form">
        <div className="form-header" onClick={() => setView('closed')}>
          <h2>Personal Details</h2>
          <IoChevronDownOutline size={30} />
        </div>
        <form>
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
      </section>
    );
  }
}
