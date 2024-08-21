import React from 'react';

export default function Experiences({ experiences }) {
  const elements = experiences.map((item) => (
    <section className="experience" key={item.id}>
      <p className="experience-title">{item.title.toUpperCase()}</p>
      <p className="label">{item.organization}</p>
      <p className="dates">{item.dates}</p>
      <p className="description">{item.description}</p>
    </section>
  ));

  return (
    <section className="education">
      <h2 className="section-heading">EXPERIENCE</h2>
      {elements}
    </section>
  );
}
