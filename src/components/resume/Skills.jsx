import React from 'react';

export default function Skills({ skills }) {
  const elements = skills.map((item) => {
    return (
      <p className="list-item" key={item.id}>
        {item.skill && <span>&#9830;</span>}
        {item.skill}
      </p>
    );
  });

  return (
    <section className="skills">
      <h2 className="section-heading">SKILLS</h2>
      {elements}
    </section>
  );
}
