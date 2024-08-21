import React from 'react';

export default function Education({ education }) {
  const elements = education.map((item) => (
    <section key={item.id}>
      <h3 className="institution-name">{item.institution}</h3>
      <p>{item.degree}</p>
      <p className="dates">{item.dates}</p>
    </section>
  ));

  return (
    <section className="education">
      <h2 className="section-heading">EDUCATION</h2>
      <div className="institution-container">{elements}</div>
    </section>
  );
}
