import React from 'react';

export default function JobInputs() {
  return (
    <form className="personal-detail-form">
      <h2>Experiences</h2>
      <label>
        Title:
        <input type="text" />
      </label>
      <label>
        Organization:
        <input type="text" />
      </label>
      <label>
        Description:
        <textarea />
      </label>
    </form>
  );
}
