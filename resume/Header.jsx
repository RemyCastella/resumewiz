import React from 'react';

export default function Header({ personalDetails }) {
  const { fullName, jobTitle } = personalDetails;

  return (
    <header>
      <h1>{fullName}</h1>
      <p>{jobTitle}</p>
      <hr />
    </header>
  );
}
