import React from 'react';

export default function Header({ personalDetails }) {
  const { fullName, jobTitle } = personalDetails;

  return (
    <section className="header">
      <h1 className="header-name">{fullName.toUpperCase()}</h1>
      <p className="header-title">{jobTitle}</p>
    </section>
  );
}
